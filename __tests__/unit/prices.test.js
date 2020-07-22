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
                        default:
                            break;
                    }
                    break;
                case '016':
                    switch (finalDDD) {
                        case '011':
                            totalPrice = inputMinutes * 2.9;

                            if ((inputMinutes - 30) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 30) * 2.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                case '017':
                    switch (finalDDD) {
                        case '011':
                            totalPrice = inputMinutes * 2.7;

                            if ((inputMinutes - 30) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 30) * 2.7;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                        default:
                            break;
                    }
                    break;

                case '018':
                    switch (finalDDD) {
                        case '011':
                            totalPrice = inputMinutes * 1.9;

                            if ((inputMinutes - 30) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 30) * 1.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                default:
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
                        default:
                            break;
                    }
                    break;
                case '016':
                    switch (finalDDD) {
                        case '011':
                            totalPrice = inputMinutes * 2.9;

                            if ((inputMinutes - 60) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 60) * 2.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                        default:
                            break;
                    }
                    break;

                case '017':
                    switch (finalDDD) {
                        case '011':
                            totalPrice = inputMinutes * 2.7;

                            if ((inputMinutes - 60) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 60) * 2.7;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                        default:
                            break;
                    }
                    break;

                case '018':
                    switch (finalDDD) {
                        case '011':
                            totalPrice = inputMinutes * 1.9;

                            if ((inputMinutes - 60) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 60) * 1.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                default:
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
                        default:
                            break;
                    }
                    break;
                case '016':
                    switch (finalDDD) {
                        case '011':
                            totalPrice = inputMinutes * 2.9;

                            if ((inputMinutes - 120) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 120) * 2.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                        default:
                            break;
                    }
                    break;

                case '017':
                    switch (finalDDD) {
                        case '011':
                            totalPrice = inputMinutes * 2.7;

                            if ((inputMinutes - 120) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 120) * 2.7;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                        default:
                            break;
                    }
                    break;

                case '018':
                    switch (finalDDD) {
                        case '011':
                            totalPrice = inputMinutes * 1.9;

                            if ((inputMinutes - 120) <= 0) {
                                discountPrice = 0;
                            } else {
                                excedentPrice = (inputMinutes - 120) * 1.9;
                                discountPrice = excedentPrice + (excedentPrice * 0.1);
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    return [discountPrice, totalPrice];
}

describe('prices', () => {
    describe('Fale Mais 30', () => {
        it('should return 0 and 57', () => {
            const test = calculatePrices('FaleMais30', '011', '016', 30);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(57);
        });
    
        it('should return 0 and 51', () => {
            const test = calculatePrices('FaleMais30', '011', '017', 30);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(51);
        });
    
        it('should return 0 and 27', () => {
            const test = calculatePrices('FaleMais30', '011', '018', 30);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(27);
        });


        it('should return 0 and 87', () => {
            const test = calculatePrices('FaleMais30', '016', '011', 30);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(87);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais30', '016', '017', 30);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais30', '016', '018', 30);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should 0 and 81', () => {
            const test = calculatePrices('FaleMais30', '017', '011', 30);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(81);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais30', '017', '016', 30);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais30', '017', '018', 30);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should 0 and 57', () => {
            const test = calculatePrices('FaleMais30', '018', '011', 30);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(57);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais30', '018', '016', 30);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais30', '018', '017', 30);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });
    });

    describe('Fale Mais 60', () => {
        it('should return 0 and 114', () => {
            const test = calculatePrices('FaleMais60', '011', '016', 60);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(114);
        });
    
        it('should return 0 and 102', () => {
            const test = calculatePrices('FaleMais60', '011', '017', 60);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(102);
        });
    
        it('should return 0 and 54', () => {
            const test = calculatePrices('FaleMais60', '011', '018', 60);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(54);
        });


        it('should return 0 and 174', () => {
            const test = calculatePrices('FaleMais60', '016', '011', 60);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(174);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais60', '016', '017', 60);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais60', '016', '018', 60);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should 0 and 162', () => {
            const test = calculatePrices('FaleMais60', '017', '011', 60);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(162);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais60', '017', '016', 60);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais60', '017', '018', 60);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should 0 and 114', () => {
            const test = calculatePrices('FaleMais60', '018', '011', 60);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(114);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais60', '018', '016', 60);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais60', '018', '017', 60);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });
    });
    
    describe('Fale Mais 120', () => {
        it('should return 0 and 228', () => {
            const test = calculatePrices('FaleMais120', '011', '016', 120);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(228);
        });
    
        it('should return 0 and 204', () => {
            const test = calculatePrices('FaleMais120', '011', '017', 120);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(204);
        });
    
        it('should return 0 and 108', () => {
            const test = calculatePrices('FaleMais120', '011', '018', 120);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(108);
        });


        it('should return 0 and 348', () => {
            const test = calculatePrices('FaleMais120', '016', '011', 120);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(348);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais120', '016', '017', 120);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais120', '016', '018', 120);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should 0 and 324', () => {
            const test = calculatePrices('FaleMais120', '017', '011', 120);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(324);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais120', '017', '016', 120);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais120', '017', '018', 120);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should 0 and 228', () => {
            const test = calculatePrices('FaleMais120', '018', '011', 120);
    
            expect(test[0]).toBe(0);
            expect(test[1]).toBe(228);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais120', '018', '016', 120);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });

        it('should return both undefined', () => {
            const test = calculatePrices('FaleMais120', '018', '017', 120);
    
            expect(test[0]).toBe(undefined);
            expect(test[1]).toBe(undefined);
        });
    });

    describe('3 tests with random numbers, greater than the plan discount', () => {
        it('should return 84.15 and 127.5', () => {
            const test = calculatePrices('FaleMais30', '011', '017', 75);
    
            expect(test[0]).toBe(84.15);
            expect(test[1]).toBe(127.5);
        });

        it('should return 118.03 and 281.3', () => {
            const test = calculatePrices('FaleMais60', '016', '011', 97);
    
            expect(test[0]).toBe(118.03);
            expect(test[1]).toBe(281.3);
        });

        it('should return 480.7 and 665', () => {
            const test = calculatePrices('FaleMais120', '018', '011', 350);
    
            expect(test[0]).toBe(480.7);
            expect(test[1]).toBe(665);
        });
    })
});