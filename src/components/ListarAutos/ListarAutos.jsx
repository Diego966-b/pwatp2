import Button from "../Button/Button";
const ListarAutos = ({ colAutos, onClick }) => {
    return (
        <div>
            {colAutos.map ((auto) => {
                return (
                    <div className='' key={auto.id}>

                        <p>{auto.marca}</p>
                        <p>{auto.modelo}</p>
                        <p>{auto.anio}</p>
                        <p>{auto.color}</p>
                        <p>{auto.precio}</p>
                        <p>{auto.transmision}</p>
                        <Button text={"Detalles"} onClick={() => onClick(auto.id)}></Button>
                    </div>
                );
            })}
        </div>
    );
}
export default ListarAutos;