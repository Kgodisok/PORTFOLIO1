const Footer = () => {
    const [data, setData] = useState(localData || null);
    
        useEffect(() => {
            fetch("/information/data.json")
            .then((res) => {
                if (!res.ok) {
                throw new Error("Failed to fetch JSON");
                }
                return res.json();
            })
            .then((json) => setData(json))
            .catch((err) => {
                // keep the localData fallback in state and log the error for debugging
                console.error("Could not fetch /information/data.json, using local data:", err);
            });
        }, []);
    
        if (!data) return <p>Loading...</p>;
    return (
        <footer>
            <p>&copy; 2026 Matsepe Kgodiso portfolio. All rights reserved.</p>
            <p>Contact: {`${data.emailAddress}`}</p>
            <p>WhatsApp: {`${data.cellPhoneNumber[0]}` | `${data.cellPhoneNumber[1]}`}</p>
            <p>LinkedIn: https://linkedin.com/in/matsepe-kgodiso</p>
        </footer>
    );
}

export default Footer;

