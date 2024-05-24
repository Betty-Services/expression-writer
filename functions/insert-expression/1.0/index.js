const insertExpression = async ({model:{name}, defaultMapping, typeMapping}) => {
    let mutation = `
        mutation {
            create${name}(input:$input){
                id
            }
        }
    `;

    // Creation of the map that needs to be written to the application.
    var finalMap = {
 //       ...createPropertySelectMapping(propertyMapping),
        ...createCustomPropertyMapping(defaultMapping, typeMapping),
    }
    // Start the mutation
    const {data, errors} = await gql(mutation, { 
        input:finalMap
    });
    if (errors) {
        console.error(`Something went wrong. please try again. \n `+
        `Error code: ${errors}`);
        return;
    }
    console.log(data);
    return
}
export default insertExpression;
