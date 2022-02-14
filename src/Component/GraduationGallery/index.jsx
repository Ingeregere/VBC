import React, { Component } from "react";

import DztImageGalleryComponent from "reactjs-image-gallery";

export default class GalleryGraduation extends Component {
  render() {
    var data = [
      {
        url:
          "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "King G4",
        thumbUrl:
          "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Blaise G4",
        thumbUrl:
          "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Apotre Roger G3",
        thumbUrl:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "G5",
        thumbUrl:
          "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
        title: "G6",
        thumbUrl:
          "https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"
      },

      {
        url:
          "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "G7",
        thumbUrl:
          "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        title: "G8",
        thumbUrl:
          "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
        title: "G9",
        thumbUrl:
          "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      }
    ];

    return (
      <div>
        <DztImageGalleryComponent images={data} />
      </div>
    );
  }
}
