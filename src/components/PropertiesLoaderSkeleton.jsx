const PropertiesLoaderSkeleton = () => {
  return (
    <div className="skeleton_loader_card">
      <div className="skeleton_loader_img"></div>
      <div className="skeleton_loader_context">
        <div className="skeleton_loader_h4"></div>
        <div className="skeleton_loader_p"></div>
        <div className="skeleton_loader_p"></div>
        <div className="skeleton_loader_row">
          <div className="skeleton_loader_circle"></div>
          <div className="skeleton_loader_col_2"></div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesLoaderSkeleton;

export const HomeLoaders = () => {
  return (
    <>
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
      <PropertiesLoaderSkeleton />
    </>
  );
};
