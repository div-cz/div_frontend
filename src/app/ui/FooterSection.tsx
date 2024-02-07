export const FooterSection = () => {
  return (
    <footer className="bg-gray-800 p-8 text-white">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {/* Column 1 */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="mb-4 text-xl font-bold">Column 1</h2>
          {/* Add your content for column 1 here */}
        </div>

        {/* Column 2 */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="mb-4 text-xl font-bold">Column 2</h2>
          {/* Add your content for column 2 here */}
        </div>

        {/* Column 3 */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="mb-4 text-xl font-bold">Column 3</h2>
          {/* Add your content for column 3 here */}
        </div>

        {/* Column 4 with dark-themed newsletter */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="mb-4 text-xl font-bold">Newsletter</h2>
          {/* Add your dark-themed newsletter form here */}
        </div>
      </div>
    </footer>
  );
};
