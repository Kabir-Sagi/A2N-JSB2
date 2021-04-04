function fn(a) {


    switch(a) {
    
        case "GM":
            console.log("Good Morning")
           break;

            case "GA":
                console.log("Good AfterNoon")
                break;

                case "GE":
                    console.log("Good Evening")
                    break;

                    default:
                        console.log("No case has been matched")

    }
}

fn("G")