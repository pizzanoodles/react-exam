function Cars() {
    const cars = ["Ford", "BMW", "Audi"]
    const arrayToList = cars.map((car) => (
        <li>I am a {car}</li>
    ));
    return(
        <>
            <h1>Who lives in my garage?</h1>
            <ul>{arrayToList}</ul>
        </>
    )
}
export default Cars;