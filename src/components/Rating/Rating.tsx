import React from "react";

type RatingPropsType = {
    // value: number
    //     or
    value: 0|1|2|3|4|5,


}
export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")
    if(props.value === 1){
        return (
            <div>
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        )
    } else if(props.value === 2){
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        )
    } else if(props.value === 3){
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        )
    } else if(props.value === 4){
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
            </div>
        )
    } else if(props.value === 5){
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
            </div>
        )
    } else {
            return (
                <div>
                    <Star selected={false} />
                    <Star selected={false} />
                    <Star selected={false} />
                    <Star selected={false} />
                    <Star selected={false} />
                </div>
            )

    }

}


type StarsPropType = {
    selected: boolean
}
function Star(props: StarsPropType) {
    // debugger
   return  props.selected === true ? <span><b>Star </b></span> : <span>Star</span>;
    console.log("Star rendering")

}