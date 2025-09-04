interface ColorInfoProps {
    data: {
      parsianblue?: string;
      limeyellow?: string;
      blue?: string;
      yellow?: string;
    };
  }
  
  const ColorInfo: React.FC<ColorInfoProps> = ({ data }) => (
    <div className="grid grid-cols-2">
      {[
        { color: data.parsianblue, label: data.blue },
        { color: data.limeyellow, label: data.yellow },
      ].map(
        ({ color, label }, index) =>
          color &&
          label && (
            <div className="mt-2" key={index}>
              <div className="flex flex-row items-center gap-2">
                <div className="h-[72px] w-[72px] rounded-xl" style={{ background: color }}></div>
                <div className="flex flex-col">
                  <span className="font-bold">{label}</span>
                  <span>{color}</span>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
  
  export default ColorInfo;
  