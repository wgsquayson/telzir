export default function CalculatePrices(plan, initialDDD, finalDDD, inputMinutes) {
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