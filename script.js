// Load data from JSON files and populate the page
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const [membersData, activitiesData, scheduleData] = await Promise.all([
            fetch('data/members.json').then(res => res.json()),
            fetch('data/activities.json').then(res => res.json()),
            fetch('data/schedule.json').then(res => res.json())
        ]);

        console.log('Members Data:', membersData);
        console.log('Activities Data:', activitiesData);
        console.log('Schedule Data:', scheduleData);

        populateMembers(membersData);
        populateActivities(activitiesData);
        populateSchedule(scheduleData);
    } catch (error) {
        console.error('Error loading data:', error);
        document.querySelector('.container').innerHTML += 
            '<p style="color: red; text-align: center;">Error loading data. Check console for details.</p>';
    }
});

// Populate members section
function populateMembers(data) {
    console.log('populateMembers called with:', data);
    const container = document.getElementById('membersContainer');
    console.log('Container element:', container);
    
    if (!container) {
        console.error('membersContainer not found!');
        return;
    }
    
    if (!data.members) {
        console.error('No members array in data!');
        return;
    }
    
    container.innerHTML = data.members.map(member => `
        <div class="member-card">
            <div class="member-name">${member.name}</div>
            <div class="member-role">${member.role}</div>
            ${member.email ? `<div class="member-contact">📧 ${member.email}</div>` : ''}
            ${member.phone ? `<div class="member-contact">📱 ${member.phone}</div>` : ''}
        </div>
    `).join('');
    
    console.log('Members populated successfully');
}

// Populate activities section
function populateActivities(data) {
    const container = document.getElementById('activitiesContainer');
    container.innerHTML = data.activities.map(activity => `
        <div class="activity-card">
            <div class="activity-title">${activity.title}</div>
            <div class="activity-date">📅 ${activity.date}</div>
            <div class="activity-description">${activity.description}</div>
        </div>
    `).join('');
}

// Populate schedule section
function populateSchedule(data) {
    const container = document.getElementById('scheduleContainer');
    container.innerHTML = data.schedule.map(item => `
        <div class="schedule-item">
            <div class="schedule-date">${item.date}</div>
            <div class="schedule-details">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                ${item.location ? `<p><strong>Location:</strong> ${item.location}</p>` : ''}
            </div>
        </div>
    `).join('');
}
