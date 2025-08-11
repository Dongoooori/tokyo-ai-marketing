import { TopImageList } from "../../constant/imageList";
import type { ImageList } from "../../types";

const ImageListComponent = () => {
  const sumArr = (arr: number[]) => arr.reduce((acc, cur) => acc + cur, 0);

  const imageGroup = (list: ImageList[], arr: number[]) => {
    if (list.length !== sumArr(arr)) return null;
    let start = 0;
    return arr.map(size => {
      const chunk = list.slice(start, start + size);
      start += size;
      return chunk;
    });
  };
  const groupImage = imageGroup(TopImageList, [1, 3, 3, 1]);

  return (
    <>
      <style>{`
        /* 기본: 모바일 좌표(layout.sp) 적용 */
        .wrap {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .group {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* 2x2 */
          grid-template-rows: repeat(2, 1fr);
          gap: 10px;
        }
        /* SP에서는 좌표 적용 안 함 */
        .grid-item {
          grid-row: var(--pc-rs) / var(--pc-re);
          grid-column: var(--pc-cs) / var(--pc-ce);
        }
        /* PC(sm 이상): layout.pc 적용 */
        @media (min-width: 768px) {
          .wrap {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* 그룹 배치 2x2 */
            grid-template-rows: repeat(2, 1fr);
            gap: 16px;
          }
          .group {
            gap: 16px;
            grid-template-columns: repeat(2, 1fr); /* 그룹 내부 2x2 */
          }
          .grid-item {
            grid-row: var(--pc-rs) / var(--pc-re);
            grid-column: var(--pc-cs) / var(--pc-ce);
          }
        }
      `}</style>

      <div className="wrap"
      >
        {groupImage?.map((group, groupIndex) => (
          <div 
            key={groupIndex} 
            className="group" 
          >
            {group.map((item, index) => (
              <div
                key={index}
                className="grid-item cursor-pointer hover:scale-105 hover:ease-in-out hover:duration-[400ms]"
                style={{
                  gridRowStart: item.rowStart,
                  gridRowEnd: item.rowEnd,
                  gridColumnStart: item.columnStart,
                  gridColumnEnd: item.columnEnd
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageListComponent;
