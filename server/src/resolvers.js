module.exports = {
  Query: {
    targetFromName: (_source, { title }, { dataSources }) =>
        dataSources.fragalysisAPI.getATarget(title),

    targetFromID: (_source, { target_id }, { dataSources }) =>
        dataSources.fragalysisAPI.getTargetFromID(target_id),

    targets: (_source, _args, { dataSources }) =>
        dataSources.fragalysisAPI.getAllTargets(),

    proteins: (_source, _args, {dataSources}) =>
        dataSources.fragalysisAPI.getAllProteins(),

    proteinFromCode: (_source, { code }, {dataSources}) =>
        dataSources.fragalysisAPI.getProteinFromCode(code),

    proteinsFromTargetID: (_source, { target_id }, {dataSources}) =>
        dataSources.fragalysisAPI.getProteinsFromTargetID(target_id),

    proteinFromID: (_source, { prot_id }, {dataSources}) =>
        dataSources.fragalysisAPI.getProteinFromID(prot_id),

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

    compoundFromID: (_source, {cmpd_id}, {dataSources}) =>
        dataSources.fragalysisAPI.getCompoundFromID(cmpd_id),
  },

  // Target: {
  //   proteins: async (parent, args, {dataSources}) =>
  //       dataSources.fragalysisAPI.getProteinFromID(parent.protein_set)
  // },

  Protein: {
    target: async (parent, args, {dataSources}) =>
        dataSources.fragalysisAPI.getTargetFromID(parent.target_id)
  },

  Compound: {
    chembl_mols: async (parent, args, {dataSources}) =>
      dataSources.chemblAPI.getChemblMoleculeBySmiles(parent.smiles)
  },

  ChemblMol: {
    activities: async (parent, args, {dataSources}) =>
      dataSources.chemblAPI.getActivityByQuery(parent.molecule_chembl_id)

  },

  Molecule: {
    protein: async (parent, args, {dataSources}) =>
        dataSources.fragalysisAPI.getProteinFromID(parent.prot_id),

    compound: async (parent, args, {dataSources}) =>
        dataSources.getCompoundFromID(parent.cmpd_id),
  }
};

// module.exports = { resolvers };
