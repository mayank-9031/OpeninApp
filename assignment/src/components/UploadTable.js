import React from "react";
import "./UploadTable.css";

const UploadTable = () => {
  const uploads = [
    {
      id: 1,
      link: "www.google.com",
      prefix: "prefixsample",
      tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    },
    {
      id: 2,
      link: "www.google.com",
      prefix: "prefixsample",
      tags: ["Tag 1", "Tag 2"],
    },
    {
      id: 3,
      link: "www.google.com",
      prefix: "prefixsample",
      tags: ["Tag 1", "Tag 2", "Tag 3"],
    },
    { id: 4, link: "www.google.com", prefix: "prefixsample", tags: ["Tag 1"] },
    { id: 5, link: "www.google.com", prefix: "prefixsample", tags: [] },
  ];

  return (
    <div className="uploads-container">
      <h2>Uploads</h2>
      <table className="uploads-table">
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add Tags</th>
            <th>Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((upload, index) => (
            <tr key={upload.id}>
              <td>{index + 1}</td>
              <td>
                <a href={upload.link} target="_blank" rel="noopener noreferrer">
                  {upload.link}
                </a>
              </td>
              <td>{upload.prefix}</td>
              <td>
                <select>
                  <option>Select Tags</option>
                </select>
              </td>
              <td>
                {upload.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag} <button className="delete-tag">x</button>
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadTable;
