const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    //발생하는 이벤트를 초기화시키지 않도록 설정
    //엔터 쳐도 인풋에 입력된 값이 사라지지 않음
    const currentValue = input.value;
    paintGreeting(currentValue);
    //여기까지 하면 loadName의 else 부분이 호출되나 값이 저장되지 않음(새로고침 시 초기화)
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    //별도 처리를 하지 않은 상태에서 input에서 엔터 시, 자료가 어딘가로 보내짐
    //addEventListern 사용해서 전처리(handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();