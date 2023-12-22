import React from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="my-10  text-white max-w-7xl mx-auto ">
      <div className="block w-full overflow-x-auto">
        <table className=" price w-[1240px] mx-auto bg-[#221F1F]">
          <thead>
            <tr className="bg-red-600">
              <th>Features</th>
              <th>Basic</th>
              <th>standerd</th>
              <th>premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td>
                49$ <sub>/Month</sub>
              </td>
              <td>
                99$ <sub>/3 Month</sub>
              </td>
              <td>
                199$ <sub>/Yearly</sub>
              </td>
            </tr>
            <tr>
              <td>Number Of Screen</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>On how many device you can Download</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Unlimited TV shows and movies</td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
            </tr>
            <tr>
              <td>watch on mobile and tablet</td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
            </tr>
            <tr>
              <td>watch on laptop and tv</td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
            </tr>
            <tr>
              <td>HD available</td>
              <td>
                <FaRegTimesCircle className="mx-auto text-xl font-bold" />
              </td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
            </tr>
            <tr>
              <td>ultra HD available</td>
              <td>
                <FaRegTimesCircle className="mx-auto text-xl font-bold" />
              </td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
              <td>
                <FaRegCheckCircle className="mx-auto text-xl font-bold" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="p-4 bg-red-600 text-white rounded">
                  Subscribe
                </button>
              </td>
              <td>
                <button className="p-4 bg-red-600 text-white rounded">
                  Subscribe
                </button>
              </td>
              <td>
                <button className="p-4 bg-red-600 text-white rounded">
                  Subscribe
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
