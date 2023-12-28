import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex justify-between items-center border-b border-gray-500 mb-4  h-20">
        <h1 className="text-3xl font-mono">Dashboard</h1>
        <Link
          href="/dashboard/admin/addvideo"
          className="uppercase py-2 px-4 bg-gradient-to-tl from-pink-600 to-slate-700 rounded"
        >
          Add Item
        </Link>
      </header>
    );
};

export default Header;