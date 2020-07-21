function calculatePrices(plan, initialDDD, finalDDD, inputMinutes) {
    let excedentPrice, discountPrice, totalPrice;

    switch (plan) {
        case 'FaleMais30':
            switch (initialDDD) {
                case '011':
                    switch (finalDDD) {
                        case '016':
                            totalPrice = inputMinutes * 1.9;

                            if ((inputMinutes - 30) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 30) * 1.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;

                        case '017':
                            totalPrice = inputMinutes * 1.7;

                            if ((inputMinutes - 30) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 30) * 1.7;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;

                        case '018':
                            totalPrice = inputMinutes * 0.9;

                            if ((inputMinutes - 30) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 30) * 0.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                    }
                    break;
                case '016':
                    finalDDD = '011';
                    totalPrice = inputMinutes * 2.9;

                    if ((inputMinutes - 30) <= 0) {
                        discountPrice = 0;
                    } else {
                        excedentPrice = (inputMinutes - 30) * 2.9;
                        discountPrice = excedentPrice + (excedentPrice * 0.1);
                    }
                    break;

                case '017':
                    finalDDD = '011';
                    totalPrice = inputMinutes * 2.7;

                    if ((inputMinutes - 30) <= 0) {
                        discountPrice = 0;
                    } else {
                        excedentPrice = (inputMinutes - 30) * 2.7;
                        discountPrice = excedentPrice + (excedentPrice * 0.1);
                    }
                    break;

                case '018':
                    finalDDD = '011';
                    totalPrice = inputMinutes * 1.9;

                    if ((inputMinutes - 30) <= 0) {
                        discountPrice = 0;
                    } else {
                        excedentPrice = (inputMinutes - 30) * 1.9;
                        discountPrice = excedentPrice + (excedentPrice * 0.1);
                    }
                    break;
            }
            break;

        case 'FaleMais60':
            switch (initialDDD) {
                case '011':
                    switch (finalDDD) {
                        case '016':
                            totalPrice = inputMinutes * 1.9;

                            if ((inputMinutes - 60) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 60) * 1.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;

                        case '017':
                            totalPrice = inputMinutes * 1.7;

                            if ((inputMinutes - 60) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 60) * 1.7;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;

                        case '018':
                            totalPrice = inputMinutes * 0.9;

                            if ((inputMinutes - 60) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 60) * 0.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                    }
                    break;
                case '016':
                    finalDDD = '011';
                    totalPrice = inputMinutes * 2.9;

                    if ((inputMinutes - 60) <= 0) {
                        discountPrice = 0;
                    } else {
                        excedentPrice = (inputMinutes - 60) * 2.9;
                        discountPrice = excedentPrice + (excedentPrice * 0.1);
                    }
                    break;

                case '017':
                    finalDDD = '011';
                    totalPrice = inputMinutes * 2.7;

                    if ((inputMinutes - 60) <= 0) {
                        discountPrice = 0;
                    } else {
                        excedentPrice = (inputMinutes - 60) * 2.7;
                        discountPrice = excedentPrice + (excedentPrice * 0.1);
                    }
                    break;

                case '018':
                    finalDDD = '011';
                    totalPrice = inputMinutes * 1.9;

                    if ((inputMinutes - 60) <= 0) {
                        discountPrice = 0;
                    } else {
                        excedentPrice = (inputMinutes - 60) * 1.9;
                        discountPrice = excedentPrice + (excedentPrice * 0.1);
                    }
                    break;
            }
            break;

        case 'FaleMais120':
            switch (initialDDD) {
                case '011':
                    switch (finalDDD) {
                        case '016':
                            totalPrice = inputMinutes * 1.9;

                            if ((inputMinutes - 120) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 120) * 1.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;

                        case '017':
                            totalPrice = inputMinutes * 1.7;

                            if ((inputMinutes - 120) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 120) * 1.7;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;

                        case '018':
                            totalPrice = inputMinutes * 0.9;

                            if ((inputMinutes - 120) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 120) * 0.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                    }
                    break;
                case '016':
                    finalDDD = '011';
                    totalPrice = inputMinutes * 2.9;

                    if ((inputMinutes - 120) <= 0) {
                        discountPrice = 0;
                    } else {
                        excedentPrice = (inputMinutes - 120) * 2.9;
                        discountPrice = excedentPrice + (excedentPrice * 0.1);
                    }
                    break;

                case '017':
                    finalDDD = '011';
                    totalPrice = inputMinutes * 2.7;

                    if ((inputMinutes - 120) <= 0) {
                        discountPrice = 0;
                    } else {
                        excedentPrice = (inputMinutes - 120) * 2.7;
                        discountPrice = excedentPrice + (excedentPrice * 0.1);
                    }
                    break;

                case '018':
                    finalDDD = '011';
                    totalPrice = inputMinutes * 1.9;

                    if ((inputMinutes - 120) <= 0) {
                        discountPrice = 0;
                    } else {
                        excedentPrice = (inputMinutes - 120) * 1.9;
                        discountPrice = excedentPrice + (excedentPrice * 0.1);
                    }
                    break;
            }
            break;
    }

    return [discountPrice, totalPrice];
}

describe('prices', () => {
    it('should return 0 and 38', () => {
        const test = calculatePrices('FaleMais30', '011', '016', 20);

        expect(test[0]).toBe(0);
        expect(test[1]).toBe(38);
    });

    it('should return 37.4 and 136', () => {
        const test = calculatePrices('FaleMais60', '011', '017', 80);

        expect(test[0]).toBe(37.4);
        expect(test[1]).toBe(136);
    });

    it('should return 167.2 and 380', () => {
        const test = calculatePrices('FaleMais120', '018', '011', 200);

        expect(test[0]).toBe(167.2);
        expect(test[1]).toBe(380);
    });
});