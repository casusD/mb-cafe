'use client';

import { createContext, useState } from 'react';

interface PostModalContextProps {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CallModalContext = createContext<PostModalContextProps>({
	openModal: false,
	setOpenModal: () => {},
});

export const CallModalProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [openModal, setOpenModal] = useState<boolean>(false);

	return (
		<CallModalContext.Provider value={{ openModal, setOpenModal }}>
			{children}
		</CallModalContext.Provider>
	);
};
