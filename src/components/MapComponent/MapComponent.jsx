import React from "react";

export default function MapComponent() {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38611.050107573996!2d29.920560714860404!3d31.199475387815088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38a0562fe85%3A0xa34cc632ec23e7!2z2YXZg9iq2KjYqSDYp9mE2KXYs9mD2YbYr9ix2YrYqSDYp9mE2KzYr9mK2K_YqQ!5e0!3m2!1sar!2seg!4v1743134420872!5m2!1sar!2seg"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups"
            />
        </>
    );
}
