

const funcaoReducer = (acumulador, valorCorrente) => {
    if (!acumulador[valorCorrente.region]) {
        acumulador[`${valorCorrente.region}`] = [];
    }
    const objeto = {
        city: valorCorrente.name,
        state: states.find((estado) => estado.short === valorCorrente.state).name,
        region: regions.find((region) => region.short === valorCorrente.region).name,
    };
    acumulador[`${valorCorrente.region}`].push(objeto);
    return acumulador;
}

const arrayEmObjeto = cities.reduce(funcaoReducer, {});

console.log('O objeto final é: ', arrayEmObjeto);