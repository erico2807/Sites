const Begrusung = () => {
    const beg = "Herzlich Wilkommen";
    const date = new Date();

    return <begrusung>
        <h1>{beg}</h1>
        <p> Date :{date.getUTCFullYear()}</p>


    </begrusung>;
};
export default Begrusung;