const socket = io()

//Elements

const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $messages = document.querySelector('#messages')

//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML

//Options
const params = new URL(location.href).searchParams;
const username = params.get('username')
const userid = params.get('userid')
const code = params.get('code')
const meet = params.get('link') || ''

const room = code
console.log(room)
// const autoscroll=()=>{
//     const $newMessage =$messages.lastElementChild
//     const newMessageHeight= $newMessage.offsetHeight
//     const newMessageStyles = getComputedStyle($newMessage)
//     const newMessageMargin = parseInt(newMessageStyles.marginBottom)
// }
socket.on('message',(message)=>{
    console.log(message)
    const html = Mustache.render(messageTemplate,{
        message:message.message,
        createdAt: moment(message.createdAt).format('h:mm:ss a'),
        username:message.username,
        email:message.userid
    })
    $messages.insertAdjacentHTML('beforeend',html)

    // autoscroll()
})


document.querySelector('#message-form').addEventListener('submit',(e)=>{
  e.preventDefault()
  $messageFormButton.setAttribute('disabled','disabled')
  const message = document.getElementById("myText").value
  console.log("Message: ",message)
  socket.emit('send',message,(error)=>{
      $messageFormButton.removeAttribute('disabled')
      $messageFormInput.value=" "
      $messageFormInput.focus()
      if(error){
          return console.log(error)
      }
      console.log('Message delivered')
  })
})

socket.emit('join',{username,room,userid,meet},(error)=>{
    if(error){
        alert(error)
        location.href='/users'
    }
})

// send the first message using notes
if (meet.length>1) {
  socket.emit('send',`The meeting link: ${meet}`,(error)=>{
      $messageFormButton.removeAttribute('disabled')
      $messageFormInput.value=" "
      $messageFormInput.focus()
      if(error){
          return console.log(error)
      }
      console.log('Message delivered')
  })
}