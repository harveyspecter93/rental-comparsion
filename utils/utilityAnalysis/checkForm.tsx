export const checkForm = (params: any) => {
    // check if all attributes are set
    const correctType = params.every((param: { weight: string; }) => !isNaN(Number(param.weight)));
    const correctSumOfWeights = params.reduce((sum: number, param: { weight: string; }) => sum + Number(param.weight), 0) == 100;
    
    // check if form is correct and give specific error messages
    switch (false) {
        case correctType:
            return ('Some attributes are not numbers - Please check your input');
        case correctSumOfWeights:
            return ('Sum of weights is not 100% - Please check your input');
        default:
            return true;
    }
    
};
