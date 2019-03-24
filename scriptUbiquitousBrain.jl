using PlotlyJS
using Blink
using WebIO
using ORCA

using DataFrames
using CSV


include("Brain/ModelHDSparse.jl")

# simulation degrees of freedom
# possible parameters for the features: chat, state, action, user
experienceStates = Dict("chat" => 1:10000000,
                        "state" => 1:1000,
                        "action" => 1:5000,
                        "user" => 1:50)

# nbMemos is the number of random events generated
# nbValid is the number of tests
nbMemos, nbValid = 50000, 1000

resultsExperiment = []
# We test HD vectors of size n and cardinal w
tests = [(1000, 10), (10000, 10), (100000, 10),(1000000, 10), (10000000, 10)]

#==================
    EXPERIMENT
==================#
# depth is the number of superposition on the same feature
for depth=1:2:20
    for (n, w) in tests

        modelEncoding = Dict(:n => n, :w => w)
        println(modelEncoding)

        brainSDMs = Dict() # re-initialise memory
        I, J, V, Ids = Int64[], Int64[], Int64[], []
        @time for i=1:nbMemos
            push!(Ids, label)
            label, idces = generateEventSDM(experienceStates, depth)
            for c in idces
                push!(I, i), push!(J, c), push!(V, 1)
            end
        end
        S = sparse(I,J,V);

        vec = S * S[1:nbValid, :]'
        res = []
        @time for i=1:nbValid
            ix = sort(1:length(vec[i,:].nzval), alg=PartialQuickSort(1), by=j->vec[i,:].nzval[j], rev=true)[1]
            val = vec[i,:].nzval[ix]
            aveg = sum(vec[i,:].nzval[[1:(ix-1); (ix+1):end]]) / (length(vec[i,:].nzval) -1)
            max = maximum(vec[i,:].nzval[[1:(ix-1); (ix+1):end]])
            push!(res, Dict(:vMinusAveg => (val - aveg)/length(vec[i,:].nzval),
                  :vMinusMax => (val - max)/length(vec[i,:].nzval)))
        end
        analysis = Dict(:depth => depth,
                        :avegDist => (map(r -> r[:vMinusAveg], res) |> sum) / length(res),
                        :minDist => (map(r -> r[:vMinusMax], res) |> minimum))
        push!(resultsExperiment, merge(analysis, modelEncoding))
    end
end

# make + save dataframe
df = DataFrame(n = Int[], w = Int[], depth = Int[], minDist = Float64[], avegDist = Float64[])
map(r -> push!(df, r), resultsExperiment)
CSV.write("Data/dataframe.csv", df)
# load dataframe
### df = CSV.read("Data/dataframe.csv", df)


#==================
    FIGURES
==================#

traces = []
for (n, w) in tests
    dfTmp = df[df[:n].==n, :]
    push!(traces, scatter(;x=dfTmp[:depth], y=dfTmp[:minDist],
                           name=string(:n,"=",n),
                           mode="markers",
                           marker=attr(opacity=0.75, size=10, symbol="square"),
                           line=attr(width=1)))
end
layout = Layout(;title = "Ubiquitous Encoding: Encode/Retrieve Random Events",
                xaxis=attr(title="<b> Nb of Elements in Superposition </b>", showgrid=false, zeroline=false),
                yaxis=attr(title= "<b> Min Distance: (best-min)/best </b>"))

p = plot(vcat(traces...), layout)
figPath = "Figs/TestUbiquitousRandom/ubiquitousMin.jpeg"
savefig(p, figPath)


traces = []
for (n, w) in tests
    dfTmp = df[df[:n].==n, :]
    push!(traces, scatter(;x=dfTmp[:depth], y=dfTmp[:avegDist],
                           name=string(:n,"=",n),
                           mode="markers",
                           marker=attr(opacity=0.75, size=10, symbol="diamond"),
                           line=attr(width=1)))
end
layout = Layout(;title = "Ubiquitous Encoding: Encode/Retrieve Random Events",
                xaxis=attr(title="<b> Nb of Elements in Superposition </b>", showgrid=false, zeroline=false),
                yaxis=attr(title= "<b> Average Distance: (best-average)/best </b>"))

p = plot(vcat(traces...), layout)
figPath = "Figs/TestUbiquitousRandom/ubiquitousAvg.jpeg"
savefig(p, figPath)
