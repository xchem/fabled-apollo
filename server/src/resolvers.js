module.exports = {
  Query: {
    target: (_source, { title }, { dataSources }) =>
        dataSources.fragalysisAPI.getATarget(title),

    targets: (_source, _args, { dataSources }) =>
        dataSources.fragalysisAPI.getAllTargets(),

    proteins: (_source, _args, {dataSources}) =>
        dataSources.fragalysisAPI.getAllProteins(),

    proteinFromCode: (_source, { code }, {dataSources}) =>
        dataSources.fragalysisAPI.getProteinFromCode(code),

    proteinsFromTargetID: (_source, { target_id }, {dataSources}) =>
        dataSources.fragalysisAPI.getProteinsFromTargetID(target_id),

    molecules: (_source, _args, {dataSources}) =>
        dataSources.fragalysisAPI.getAllMolecules(),

    compounds: (_source, _args, {dataSources}) =>
        dataSources.fragalysisAPI.getAllCompounds(),

    activities: (_source, _args, {dataSources}) =>
        dataSources.chemblAPI.getAllActivities(),

    activitiesByQuery: (_source, { query }, { dataSources }) =>
        dataSources.chemblAPI.getActivityByQuery(query),

    chemblMoleculeBySmiles: (_source, { smiles }, { dataSources }) =>
        dataSources.chemblAPI.getChemblMoleculeBySmiles(smiles),
  },
};

// module.exports = { resolvers };
