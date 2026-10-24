/*
    amdsleem Contact System v1.0
    WhatsApp Sender
*/

const sendButton = document.getElementById("send-whatsapp");

if (sendButton) {

    sendButton.addEventListener("click", () => {

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (!name || !phone || !message) {
            alert("Please fill all fields.");
            return;
        }

        const whatsappNumber = "966511480590";

        const text =
`New Website Message

Name: ${name}

Phone: ${phone}

Message:
${message}`;

        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}