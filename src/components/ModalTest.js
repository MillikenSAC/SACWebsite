import React, { useState } from "react";

const ModalExample = () => {
  const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
  const [isScrollableModalOpen, setIsScrollableModalOpen] = useState(false);

  const closeModal = () => {
    setIsCenterModalOpen(false);
    setIsScrollableModalOpen(false);
  };

  return (
    <div className="space-y-2">
      {/* Button trigger for vertically centered modal */}
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
        onClick={() => setIsCenterModalOpen(true)}
      >
        Vertically centered modal
      </button>

      {/* Button trigger for vertically centered scrollable modal */}
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
        onClick={() => setIsScrollableModalOpen(true)}
      >
        Vertically centered scrollable modal
      </button>

      {/* Vertically centered modal */}
      {isCenterModalOpen && (
        <div
          className="fixed left-0 top-0 z-[1055] flex items-center justify-center h-full w-full bg-black bg-opacity-50"
          role="dialog"
        >
          <div className="relative flex flex-col rounded-md bg-white shadow-lg w-full max-w-lg p-4">
            <div className="flex justify-between items-center border-b pb-2">
              <h5 className="text-xl font-medium">Modal title</h5>
              <button
                type="button"
                className="text-neutral-500 hover:text-neutral-800"
                onClick={closeModal}
                aria-label="Close"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="relative p-4">
              <p>This is a vertically centered modal.</p>
            </div>
            <div className="flex justify-end border-t pt-2">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Vertically centered scrollable modal */}
      {isScrollableModalOpen && (
        <div
          className="fixed left-0 top-0 z-[1055] flex items-center justify-center h-full w-full bg-black bg-opacity-50 overflow-y-auto"
          role="dialog"
        >
          <div className="relative flex flex-col rounded-md bg-white shadow-lg w-full max-w-lg p-4 max-h-full overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-2">
              <h5 className="text-xl font-medium">Modal title</h5>
              <button
                type="button"
                className="text-neutral-500 hover:text-neutral-800"
                onClick={closeModal}
                aria-label="Close"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="relative p-4">
              <p>
                This is some placeholder content to show a vertically centered modal. We've added some
                extra copy here to show how vertically centering the modal works when combined with
                scrollable modals. We also use some repeated line breaks to quickly extend the height
                of the content, thereby triggering the scrolling. When content becomes longer than the
                predefined max-height of modal, content will be cropped and scrollable within the modal.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>Just like that.</p>
            </div>
            <div className="flex justify-end border-t pt-2">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalExample;
