const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
const portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
const portPowersKw = [250, 150, 60, 250, 60, 150];

console.log('--- TRANG THAI BAN DAU ---');
for (let i = 0; i < portIds.length; i++) {
    console.log('Tru: ' + portIds[i] + ' | Trang thai: ' + portStatuses[i] + ' | Cong suat: ' + portPowersKw[i] + ' kW');
}

const indexS01 = portIds.indexOf('S01');
if (indexS01 !== -1) {
    portStatuses[indexS01] = 'CHARGING';
}

const indexS03 = portIds.indexOf('S03');
if (indexS03 !== -1) {
    portStatuses[indexS03] = 'AVAILABLE';
}

console.log('\n--- SAU KHI CAP NHAT ---');
for (let i = 0; i < portIds.length; i++) {
    console.log('Tru: ' + portIds[i] + ' | Trang thai: ' + portStatuses[i] + ' | Cong suat: ' + portPowersKw[i] + ' kW');
}

let availableCount = 0;
let maxAvailablePower = -1;
let maxPowerPortId = '';

for (let i = 0; i < portIds.length; i++) {
    if (portStatuses[i] === 'AVAILABLE') {
        availableCount++;
        if (portPowersKw[i] > maxAvailablePower) {
            maxAvailablePower = portPowersKw[i];
            maxPowerPortId = portIds[i];
        }
    }
}

console.log('\n--- THONG KE TRAM SAC ---');
console.log('Tong so tru AVAILABLE: ' + availableCount);
if (availableCount > 0) {
    console.log('Tru AVAILABLE co cong suat cao nhat la ' + maxPowerPortId + ' với ' + maxAvailablePower + ' kW');
} else {
    console.log('Hien khong co tru nao san sang.');
}