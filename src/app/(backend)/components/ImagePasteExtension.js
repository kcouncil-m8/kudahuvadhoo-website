import { Extension } from "@tiptap/core";
import { Plugin } from "prosemirror-state";

const ImagePasteExtension = Extension.create({
  name: "imagePaste",

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handlePaste: (view, event, slice) => {
            const items = Array.from(event.clipboardData?.items || []);
            const image = items.find(
              (item) => item.type.indexOf("image") === 0
            );

            if (image) {
              event.preventDefault();
              const blob = image.getAsFile();

              const formData = new FormData();
              formData.append("file-input", blob);

              fetch("/admin/api/upload-file", {
                method: "POST",
                body: formData,
              })
                .then((response) => response.json())
                .then((data) => {
                  const node = view.state.schema.nodes.image.create({
                    src: data.fileUrl,
                    alt: "Uploaded image",
                    title: "Uploaded image",
                  });
                  const placeholderTr =
                    view.state.tr.replaceSelectionWith(node);
                  view.dispatch(placeholderTr);
                })
                .catch((error) => {
                  console.error("Error uploading image:", error);
                });

              return true;
            }
            return false;
          },
        },
      }),
    ];
  },
});

export default ImagePasteExtension;
