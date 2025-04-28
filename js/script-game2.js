let situationImage = document.getElementById('situation-image');
let resultText = document.getElementById('result');

function chooseOption(option) {
    switch(option) {
        case 1:
            // Option 1: ไปกับเขา
            situationImage.src = "danger.jpg";  // ภาพอันตราย
            resultText.innerHTML = "นั่นอาจจะอันตราย! ควรเลือกใหม่และไม่ไปกับเขานะ!";
            break;
        case 2:
            // Option 2: ตะโกนเรียกช่วย
            situationImage.src = "help.jpg";  // ภาพมีคนมาช่วย
            resultText.innerHTML = "เยี่ยมเลย! มีคนมาช่วยแล้ว คุณปลอดภัยแล้ว!";
            break;
        case 3:
            // Option 3: วิ่งหนี
            situationImage.src = "run.jpg";  // ภาพวิ่งหนี
            resultText.innerHTML = "คุณวิ่งหนีไปหาผู้ใหญ่หรือตำรวจ? เลือกอย่างใดอย่างหนึ่ง!";
            // เพิ่มปุ่มเลือกต่อไปให้เลือกหาผู้ใหญ่หรือตำรวจ
            addFollowUpChoices();
            break;
    }
}

function addFollowUpChoices() {
    let followUpChoices = `
        <button class="choice" onclick="chooseFollowUp(1)">
            <img src="adult.jpg" alt="ไปหาผู้ใหญ่" />
        </button>
        <button class="choice" onclick="chooseFollowUp(2)">
            <img src="police.jpg" alt="ไปหาตำรวจ" />
        </button>
    `;
    document.getElementById('choices').innerHTML = followUpChoices;
}

function chooseFollowUp(choice) {
    if (choice === 1) {
        situationImage.src = "safe.jpg";  // ภาพผู้ใหญ่ช่วย
        resultText.innerHTML = "ดีมาก! ผู้ใหญ่จะช่วยคุณให้ปลอดภัย!";
    } else if (choice === 2) {
        situationImage.src = "police_help.jpg";  // ภาพตำรวจช่วย
        resultText.innerHTML = "เยี่ยมเลย! ตำรวจจะช่วยให้คุณปลอดภัย!";
    }
}
