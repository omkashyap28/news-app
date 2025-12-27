import { useAppStore } from "../store/store";

const Loader = () => {
  const loader = useAppStore(state => state.loader);

  console.log("Loader state:", loader);

  if (!loader) return null;
  return (
    <div className="h-full w-full flex items-center justify-center bg-[#000000ad] fixed top-0 left-0 z-999">
      <span className="loading loading-spinner loading-xl"></span>
    </div>

  );
}
export default Loader;