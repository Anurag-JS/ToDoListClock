
export default function Greet(){

    const greeting = () => {
        let hours = new Date().getHours();

        if(hours < 12){
            return "Good Morning"
        }else if(hours < 17){
            return "Good AfterNoon"
        }else if(hours < 21){
            return "Good Evening"
        }else{
            return "Good Night"
        }
    }

    return(
        <div>
            <h2>{greeting()}</h2>
        </div>
    )
}