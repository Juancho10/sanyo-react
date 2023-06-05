
// eslint-disable-next-line react/prop-types
export function Button({texto, variant}){

    return(
        <button className={variant}>{texto}</button>
    );
}