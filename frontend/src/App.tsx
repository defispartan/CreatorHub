import {
  LENS_UI_HELPER_CONTRACT_ADDRESS,
  polygonHttpRpc,
  PROFILE_ID,
} from "./config";
import { useQuery } from "@tanstack/react-query";
import LENS_UI_HELPER_CONTRACT_ABI from "./abis/LensUiDataProvider.json";
import { sanitizeHashUrl } from "./utils";

type ProfileData = {
  profileStruct: {
    handle: string;
    imageURI: string;
  };
};

function App() {
  const { data } = useQuery({
    queryKey: ["lensProfile"],
    queryFn: () => {
      const profileData: Promise<ProfileData> = polygonHttpRpc.readContract({
        address: LENS_UI_HELPER_CONTRACT_ADDRESS,
        abi: LENS_UI_HELPER_CONTRACT_ABI,
        functionName: "getLatestDataByProfile",
        args: [PROFILE_ID],
      }) as Promise<ProfileData>;
      return profileData;
    },
  });
  return (
    <>
      {data && (
        <>
          <span className="profile-handle">{data.profileStruct.handle}</span>
          <div className="profile-container">
            <img
              src={sanitizeHashUrl(data.profileStruct.imageURI)}
              alt="Profile Picture"
            />
          </div>
        </>
      )}
      <h1>CreatorHub</h1>
      <div className="card">
        <p className="text">
          Listening for backend at {import.meta.env.VITE_BACKEND_PATH}
        </p>
      </div>
    </>
  );
}

export default App;
