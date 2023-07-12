import * as Avatar from "@radix-ui/react-avatar";
// import { getInitials } from "@/utils/helper-funcs";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";

export const UserAvatar = ({ size, hasBorder = true }) => {
	const { data: currentUser } = useCurrentUser();
	const { data: fetchedUser } = useUser(currentUser?.handle);

	// const usernameInitials = getInitials(currentUser ? currentUser.name : "@");

	return (
		<>
			<Avatar.Root
				className={`inline-flex h-[35px] w-[35px] ${
					hasBorder && "border-2 border-blue-300"
				} items-center justify-center overflow-hidden rounded-full align-middle lg:w-[45px] lg:h-[45px]`}>
				<Avatar.Image
					className="h-full w-full rounded-[inherit] object-cover"
					src={fetchedUser && fetchedUser?.image}
					referrerPolicy="no-referrer"
					alt="avatar"
				/>
				<Avatar.Fallback
					className={`leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium`}
					delayMs={100}>
					@
				</Avatar.Fallback>
			</Avatar.Root>
		</>
	);
};

export const UserAvatarSetting = () => {
	const { data: currentUser } = useCurrentUser();
	const { data: fetchedUser } = useUser(currentUser?.handle);

	// const usernameInitials = getInitials(currentUser ? currentUser.name : "@");

	return (
		<>
			<Avatar.Root
				className={`inline-flex h-[100px] w-[100px] 
				 items-center justify-center overflow-hidden rounded-full align-middle `}>
				<Avatar.Image
					className="h-full w-full rounded-[inherit] object-cover"
					src={fetchedUser && fetchedUser?.image}
					referrerPolicy="no-referrer"
					alt="avatar"
				/>
				<Avatar.Fallback
					className={`leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium`}
					delayMs={100}>
					@
				</Avatar.Fallback>
			</Avatar.Root>
		</>
	);
};
