export interface SeoData{
    [key: string]: {
        title: string;
        description: string;
      };
}
export interface RouteParams {
  [key: string]: string;
}

interface MatchedData {
  title: string;
  description: string;
}

// Function to get matched data based on route params
export function getMatchedData(
  params: RouteParams,
  data: SeoData
): MatchedData | undefined {
  let currentData: SeoData | undefined = data;
  let finalData: any;
  for (const param of Object.values(params)) {
    if (currentData && currentData[param]) {
      finalData = currentData[param];
    } else {
      return undefined;
    }
  }

  if (finalData) {
    const { title, description } = finalData;
    return {
      title: title,
      description: description,
    };
  }

  return undefined;
}
