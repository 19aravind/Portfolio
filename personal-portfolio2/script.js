document.getElementById("clickIcon").addEventListener("click", function () {
    document.getElementById("infoSection").classList.remove("hidden"); // Show hero section
    document.getElementById("introSection").classList.add("hidden"); // Hide intro section
});

// // Back button resets the page
// document.getElementById("backButton").addEventListener("click", function() {
//     document.getElementById("infoSection").classList.add("hidden");
//     document.getElementById("introSection").classList.remove("hidden");
// });

document.getElementById("aboutBtn").addEventListener("click", function () {
    document.getElementById("infoSection").classList.add("hidden");
    document.getElementById("introSection").classList.add("hidden");
    document.getElementById("skillsSection").classList.add("hidden");

    document.getElementById("aboutSection").classList.remove("hidden");
});

// // Hide all sections when closing
document.getElementById("infoSection").addEventListener("click", function () {
    document.getElementById("infoSection").classList.add("hidden"); // Hide hero section
    document.getElementById("introSection").classList.remove("hidden"); // Show intro section
});

// // Back button resets the page
// document.getElementById("backButton").addEventListener("click", function() {
//     document.getElementById("infoSection").classList.add("hidden");
//     document.getElementById("introSection").classList.remove("hidden");
// });


document.addEventListener("DOMContentLoaded", function () {
    const aboutBtn = document.getElementById("aboutBtn");
    const skillsBtn = document.getElementById("skillsBtn");
    const backHome = document.getElementById("backHome");
    const backHomeSkills = document.getElementById("backHomeSkills");

    const aboutSection = document.getElementById("aboutSection");
    const skillsSection = document.getElementById("skillsSection");

    function hideAllSections() {
        aboutSection.classList.add("hidden");
        skillsSection.classList.add("hidden");
        
        
    }

    aboutBtn.addEventListener("click", function () {
        hideAllSections();
        aboutSection.classList.remove("hidden");
    });

    skillsBtn.addEventListener("click", function () {
        hideAllSections();
        skillsSection.classList.remove("hidden");
    document.getElementById("infoSection").classList.add("hidden");
    document.getElementById("introSection").classList.add("hidden");
         
    });

    backHome.addEventListener("click", function () {
        hideAllSections();
    document.getElementById("introSection").classList.remove("hidden")
    
    });

    backHomeSkills.addEventListener("click", function () {
        hideAllSections();
        document.getElementById("infoSection").classList.add("hidden");
    document.getElementById("introSection").classList.remove("hidden");
        
    });
});

document.getElementById("projectsBtn").addEventListener("click", function () {
    document.getElementById("projectsSection").classList.remove("hidden"); // Show Projects Section
    document.getElementById("introSection").classList.add("hidden");
   
});

document.getElementById("backToMain").addEventListener("click", function () {
    document.getElementById("projectsSection").classList.add("hidden"); // Hide Projects Section
    document.getElementById("introSection").classList.remove("hidden");
});

document.getElementById("sayHiBtn").addEventListener("click", function() {
    document.getElementById("contactModal").classList.remove("hidden");
    document.getElementById("introSection").classList.add("hidden");
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("contactModal").classList.add("hidden");
    document.getElementById("introSection").classList.remove("hidden");
});





// // Resume button (Navigate to Resume Page)
// document.getElementById("resumeBtn").addEventListener("click", function() {
//     window.location.href = "resume.pdf"; // Change to the correct resume link
// });

// // Say hi button (Navigate to Contact Section)
// document.getElementById("sayHiBtn").addEventListener("click", function() {
//     alert("Open Contact Form or Email Here!");
// });

// // Projects button
// document.getElementById("projectsBtn").addEventListener("click", function() {
//     alert("Projects Section Coming Soon!");
// });

// // About button
// document.getElementById("aboutBtn").addEventListener("click", function() {
//     alert("About Me Section!");
// });

// // Skills button
// document.getElementById("skillsBtn").addEventListener("click", function() {
//     alert("Skills Section!");
// });

 // Show hidden navigation elements
document.querySelector(".right-sidebar").classList.remove("hidden");
document.querySelector(".left-sidebar").classList.remove("hidden");
document.querySelector(".bottom-navigation").classList.remove("hidden");