export default effectSpecs =>
  effectSpecs.filter(([assertion]) => assertion).map(([, effect]) => effect);
