const btn=document.querySelector("#btn");
let content=document.querySelector("#clickme");
const voice=document.querySelector("#voice");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.volume=1;
    text_speak.pitch=1;
    text_speak.lang="hi-GB";
    window.speechSynthesis.speak(text_speak);
}
function wishme(){
    let day=new Date();
    let hours=day.getHours();
    if(hours>=0 && hours<12){
        speak("good morning sir");

    }
    else if(hours>=12  && hours<4){
        speak("good afternoon sir");
    }
    else{
        speak("good evening sir");
    }
}
window.addEventListener("load",()=>{
    wishme();
})
let speechrecog=window.SpeechRecognition ||window.webkitSpeechRecognition;
let recognition=new speechrecog();
recognition.onresult=(event)=>{
    // let curridx=event.resultIndex;
    let transcript=event.results[0][0].transcript;
    content.innerText=transcript;
    console.log(transcript);
    console.log(event);
    takecommand(transcript.toLowerCase());
    // clickme(transcript);
}
function takecommand(message){
    btn.style.display="block";
    voice.style.display="none";
    if(message.includes("hello")||message.includes("Hey")){
        speak("hello sir,What can i do for you?");
    }
    else if(message.includes("what is your name")){
        speak("my name is jarvis");
    }
    else if(message.includes("who are you")){
        speak("iam an virtual assistance , created by sir kumar Aaryan");
    }
    else if(message.includes("founder")){
        speak("kumar aaryan is my founder");
    }
    else if(message.includes("suraj")||message.includes("abhishek")){
        speak("he your friend");
    }
    else if(message.includes("open youtube")){
        speak("Opening youtube");
        window.open("https://www.youtube.com","_blank");
    }
    else if(message.includes("open instagram")){
        speak("Opening instagram");
        window.open("https://www.instagram.com","_blank");
    }
    else if(message.includes("open google")){
        speak("Opening google");
        window.open("https://www.google.com","_blank");
    }
    else if(message.includes("open calculator")){
        speak("Opening calculator");
        window.open("calculator://");
    }
    else if(message.includes("open whatsapp")){
        speak("Opening whatsapp");
        window.open("whatsapp://");
    }
    else if(message.includes("open copilot")){
        speak("Opening copilot");
        window.open("copilot://");
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time);
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date);
    }
    else{
        speak(`this is what i found on internet regarding ${message.replace(".rounak")}`);
        window.open(`https://www.google.com/search?q=${message.replace(".rounak","")}`,"_blank");
    }
    
    
}
btn.addEventListener("click",()=>{
    btn.style.display="none";
    voice.style.display="block";
    recognition.start();
})