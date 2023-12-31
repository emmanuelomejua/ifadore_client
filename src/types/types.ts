export interface SidebarItems {
    id: number;
    title: string;
    url: string;
    icon: React.ReactElement;
  }


export interface inputProps {
    id: number,
    title: string,
    amount: number,
    address: string,
    phone: number,
    name: string
}


export interface linkItems {
    id: number,
    name: string,
    url: string
}

export interface modalInputProps {
    id: number,
    type: string,
    placeholder?: string,
    min?: number,
    minLenght?: number,
    maxLenght?: number
}






// useEffect(() => {

//     const handleWindowLoad = () => {

//       setMenu(false);
//     };

//     window.addEventListener('load', handleWindowLoad);
//     return () => {
//       window.removeEventListener('load', handleWindowLoad);
//     };
//   }, []);