import Apk from "../assets/icons/apk.svg";
import StoreLink from "../common/StoreLink";


interface StoreLinksProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Standard,
  Variant,
}

function StoreLinks({ type }: StoreLinksProps) {
  if (type === BtnTypes.Standard) {
    return (
      <div className="mt-10 flex justify-center space-x-2 sm:flex md:justify-normal">
        <StoreLink
          to="/download"
          upperText="Descarga Ahora"
          lowerText=".apk"
          logo={Apk}
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
      </div>
    );
  }
}

export default StoreLinks;


