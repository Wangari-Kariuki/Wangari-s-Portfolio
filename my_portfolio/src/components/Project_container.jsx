import React from 'react';

export default function Flip_container({ content }) {
    // Function to render content based on the currentContent state
    const renderContent = () => {
        if (content.toLowerCase() === 'projects') {
            return (
                <>
                    <div>
                        <h1>Project 1</h1>
                        <p>
                            This is some dummy text about Project 1, 
                            demonstrating its details and features.
                        </p>
                        <a href="#">Project 1 link</a>
                    </div>
                    <div>
                        <h1>Project 2</h1>
                        <p>
                            This is some dummy text about Project 2,
                             showing more information and background.
                        </p>
                        <a href="#">Project 2 link</a>
                    </div>
                </>
            );
        } else if (content === 'Skills') {
            return (
                <div>
                    <h1>Skill 1</h1>
                    <p>Details about Skill 1.</p>
                </div>
            );
        }

        // Default content if nothing matches
        return <div className='contact-details'>
            <h1>Contact Details</h1>
            <p>
                Feel free to contact me at any time.
                <br />
                Email: info@example.com
                <br />
                Phone: 123-456-7890
            </p>
            <a href="mailto:info@example.com">Contact Me</a>
            <a href="tel:123-456-7890">Call Me</a>
            <a href="https://github.com/username">Github Profile</a>
            <a href="https://www.linkedin.com/in/username">LinkedIn Profile</a>
            <a href="https://www.facebook.com/username">Facebook Profile</a>
            <a href="https://www.instagram.com/username">Instagram Profile</a>
        </div>;
    };

    return <div className='flip_container'>{renderContent()}</div>;
}

