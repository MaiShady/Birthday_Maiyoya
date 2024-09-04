// التفاعل مع زر "ابدأ الاحتفال"
document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('.welcome-container').classList.add('hidden');
    document.getElementById('surpriseContainer').classList.remove('hidden');
    document.getElementById('greetingCardContainer').classList.remove('hidden');
});

// التفاعل مع زر "اعرض رسالتك الخاصة"
document.getElementById('showMessageButton').addEventListener('click', function() {
    const personalMessage = document.getElementById('personalMessage');
    personalMessage.textContent = "انت شخص ڤيڤورت بنسبالي بجد شكرا";
    personalMessage.classList.remove('hidden');
});

// التفاعل مع نموذج بطاقة التهنئة
document.getElementById('greetingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const listItem = document.createElement('li');
    listItem.textContent = '${name}: ${message}';
    document.getElementById('greetingsList').appendChild(listItem);

    document.getElementById('greetingForm').reset();
});