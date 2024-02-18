const seatsNumber = document.querySelectorAll('.seat-number');
let seatCount = 8;
let seatN = 0;

for (const setNum of seatsNumber) {
    setNum.addEventListener('click', function () {
        if (seatN < 4) {
            const seat = document.getElementById('seat');
            seatN = seatN + 1;
            seat.innerText = seatN;
        }
        else {
            alert('You cannot purchase more than 4 tickets.');
            return;
        }
        const seatsLeft = document.getElementById('seats');
        seatCount = seatCount - 1;
        seatsLeft.innerText = seatCount;
        setNum.classList.add('bg-green-500');

        const trTable = document.getElementById('tr-table');
        const tr = document.createElement('tr');
        
        const details = document.getElementById('details');
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = setNum.innerText;
        div.appendChild(p);
        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        div.appendChild(p2);
        const p3 = document.createElement('p');
        p3.innerText = 550;
        div.classList.add('flex', 'justify-between')
        div.appendChild(p3);
        details.appendChild(div);
    })
}

