var likeBtn = document.getElementById('likeBtn'),
    alertBox = document.querySelector('.alertBox'),
    alertClose = document.querySelector('.alertClose');
likeBtn.addEventListener('click',(e)=>{
    alertBox.style.display = 'block';
});
alertClose.addEventListener('click',(e)=>{
    alertBox.style.display = 'none';
}); 