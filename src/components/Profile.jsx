import Avatar from "./Avatar";

export default function Profile() {
    const person = {
        imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
        name: 'kim',
    }
    const size = 90;
    return(
        <>
        <Card>
            <Avatar person={person} size={size}/>
        </Card>
        </>
    );
}