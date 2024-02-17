/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Long: { input: any; output: any; }
};

export type AdvancedSearchAlbumResult = {
  __typename?: 'AdvancedSearchAlbumResult';
  id: Scalars['Int']['output'];
  station: Station;
  title: Scalars['String']['output'];
};

export type AdvancedSearchArtistResult = {
  __typename?: 'AdvancedSearchArtistResult';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  station: Station;
};

/** Advanced search results. */
export type AdvancedSearchResults = {
  __typename?: 'AdvancedSearchResults';
  albums: Array<Maybe<AdvancedSearchAlbumResult>>;
  artists: Array<Maybe<AdvancedSearchArtistResult>>;
  episodes: Array<Maybe<Episode>>;
  podcasts: Array<Maybe<Podcast>>;
  songs: Array<Maybe<AdvancedSearchSongResult>>;
  stations: Array<Maybe<Station>>;
};

export type AdvancedSearchSongResult = {
  __typename?: 'AdvancedSearchSongResult';
  id: Scalars['Int']['output'];
  station: Station;
  title: Scalars['String']['output'];
};

export type Album = {
  __typename?: 'Album';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Artist = {
  __typename?: 'Artist';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type CurrentTime = {
  __typename?: 'CurrentTime';
  datetime: Scalars['String']['output'];
  timestamp: Scalars['Long']['output'];
};

/** Episode details. */
export type Episode = {
  __typename?: 'Episode';
  description: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  files: EpisodeFiles;
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  playbackProgress: Scalars['Int']['output'];
  podcast: Podcast;
  publishedAt: Scalars['Long']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  /** unique ID */
  title: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

/** Episode playable files URLs. At least one will always be available. */
export type EpisodeFiles = {
  __typename?: 'EpisodeFiles';
  HLS?: Maybe<Scalars['String']['output']>;
};

/** Paginated episodes list. */
export type Episodes = {
  __typename?: 'Episodes';
  content: Array<Maybe<Episode>>;
  pagination: Pagination;
};

/** Frequently Asked Questions list. */
export type Faq = {
  __typename?: 'FAQ';
  sections: Array<Maybe<Section>>;
};

/** Language details. */
export type Language = {
  __typename?: 'Language';
  code: Scalars['String']['output'];
  /** ISO 639-1 compatible code */
  name: Scalars['String']['output'];
};

/** Details about current pagination settings. */
export type Pagination = {
  __typename?: 'Pagination';
  /** all elements matching current search */
  page: Scalars['Int']['output'];
  /** current page number (starting from 0) */
  size: Scalars['Int']['output'];
  totalElements: Scalars['Int']['output'];
};

export type PlaybackItem = Episode | Station;

/** Podcast details. */
export type Podcast = {
  __typename?: 'Podcast';
  adult: Scalars['Boolean']['output'];
  categories: Array<PodcastsCategory>;
  createdAt: Scalars['Long']['output'];
  description: Scalars['String']['output'];
  episodesCount: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  /** non-unique slug */
  imageUrl: Scalars['String']['output'];
  language: Language;
  /** count of all currently visible episodes */
  latestEpisode?: Maybe<Episode>;
  leadingColor: Scalars['String']['output'];
  liked: Scalars['Boolean']['output'];
  novelty: Scalars['Boolean']['output'];
  podcastWP: Scalars['Boolean']['output'];
  premium: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  sourceType: Scalars['String']['output'];
  sponsored: Scalars['Boolean']['output'];
  /** unique ID */
  title: Scalars['String']['output'];
  top: Scalars['Boolean']['output'];
  updatedAt: Scalars['Long']['output'];
};

/** Paginated podcasts list. */
export type Podcasts = {
  __typename?: 'Podcasts';
  content: Array<Maybe<Podcast>>;
  pagination: Pagination;
};

/** Paginated podcasts categories list. */
export type PodcastsCategories = {
  __typename?: 'PodcastsCategories';
  content: Array<Maybe<PodcastsCategory>>;
  pagination: Pagination;
};

/** Single podcasts category. */
export type PodcastsCategory = {
  __typename?: 'PodcastsCategory';
  id: Scalars['Int']['output'];
  /** unique slug */
  name: Scalars['String']['output'];
  podcasts?: Maybe<Podcasts>;
  /** unique ID */
  slug: Scalars['String']['output'];
};


/** Single podcasts category. */
export type PodcastsCategoryPodcastsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Advanced search query returns all matching podcasts, episodes, stations, songs, authors and albums. */
  advancedSearch?: Maybe<AdvancedSearchResults>;
  /** Current server time. */
  currentTime?: Maybe<CurrentTime>;
  /** Single episode query. */
  episode?: Maybe<Episode>;
  /** Single episode by UUID query. */
  episodeByUUID?: Maybe<Episode>;
  /** Episodes search query. */
  episodes?: Maybe<Episodes>;
  /** Frequently Asked Questions list query. */
  faq?: Maybe<Faq>;
  /** List of podcasts liked by the current user. */
  likedPodcasts?: Maybe<Podcasts>;
  /** List of stations liked by the current user. */
  likedStations?: Maybe<Stations>;
  /** List of stations and episodes recently listened byt the current user. */
  playbacks: Array<Maybe<PlaybackItem>>;
  /** Single podcast query. */
  podcast?: Maybe<Podcast>;
  /** Podcasts search query. */
  podcasts?: Maybe<Podcasts>;
  /** Podcasts categories search query. */
  podcastsCategories?: Maybe<PodcastsCategories>;
  /** Single podcasts category query. ID or slug is required. */
  podcastsCategory?: Maybe<PodcastsCategory>;
  /** Promoted podcasts search query. */
  podcastsPromoted?: Maybe<Podcasts>;
  /** Single station query. */
  station?: Maybe<Station>;
  /** Stations search query. */
  stations?: Maybe<Stations>;
  /** Stations categories search query. */
  stationsCategories?: Maybe<StationsCategories>;
  /** Single stations category query. ID or slug is required. */
  stationsCategory?: Maybe<StationsCategory>;
  /** Promoted stations from dayparts. */
  stationsPromoted?: Maybe<Stations>;
};


export type QueryAdvancedSearchArgs = {
  phrase: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['Int']['input'];
  podcastID: Scalars['Int']['input'];
};


export type QueryEpisodeByUuidArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryEpisodesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  podcastID?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLikedPodcastsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLikedStationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPlaybacksArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPodcastArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPodcastsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPodcastsCategoriesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPodcastsCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPodcastsPromotedArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStationsCategoriesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStationsCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStationsPromotedArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

/** Single FAQ question with answer. */
export type Question = {
  __typename?: 'Question';
  answer: Scalars['String']['output'];
  question: Scalars['String']['output'];
};

/** Single FAQ section. */
export type Section = {
  __typename?: 'Section';
  questions: Array<Maybe<Question>>;
  title: Scalars['String']['output'];
};

/** Structure describing song in context of some station. */
export type Song = {
  __typename?: 'Song';
  /** song duration in seconds */
  album?: Maybe<Album>;
  artists: Array<Maybe<Artist>>;
  cover: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** starting timestamp */
  length: Scalars['Int']['output'];
  startTime: Scalars['Long']['output'];
  title: Scalars['String']['output'];
};

/** Station details. */
export type Station = {
  __typename?: 'Station';
  categories: Array<StationsCategory>;
  contentType: Scalars['String']['output'];
  /** short list of songs to be played sorted by start time (including currently playing) */
  currentSong: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  liked: Scalars['Boolean']['output'];
  /** playable stream url */
  logoUrl: Scalars['String']['output'];
  /** unique ID */
  name: Scalars['String']['output'];
  novelty: Scalars['Boolean']['output'];
  playlist: Array<Maybe<Song>>;
  premium: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  sponsored: Scalars['Boolean']['output'];
  /** non-unique slug */
  streamUrl: Scalars['String']['output'];
  top: Scalars['Boolean']['output'];
};

/** Paginated stations list. */
export type Stations = {
  __typename?: 'Stations';
  content: Array<Maybe<Station>>;
  pagination: Pagination;
};

/** Paginated stations categories list. */
export type StationsCategories = {
  __typename?: 'StationsCategories';
  content: Array<Maybe<StationsCategory>>;
  pagination: Pagination;
};

/** Single stations category. */
export type StationsCategory = {
  __typename?: 'StationsCategory';
  id: Scalars['Int']['output'];
  /** unique slug */
  name: Scalars['String']['output'];
  /** unique ID */
  slug: Scalars['String']['output'];
  stations?: Maybe<Stations>;
};


/** Single stations category. */
export type StationsCategoryStationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl: Scalars['String']['output'];
};

export type GetStationQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetStationQuery = { __typename?: 'Query', station?: { __typename?: 'Station', name: string, slug: string, streamUrl: string, currentSong: string, playlist: Array<{ __typename?: 'Song', title: string, length: number, album?: { __typename?: 'Album', title: string } | null, artists: Array<{ __typename?: 'Artist', id: number, name: string } | null> } | null> } | null };

export type GetStationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStationsQuery = { __typename?: 'Query', stations?: { __typename?: 'Stations', content: Array<{ __typename?: 'Station', id: number, name: string, description: string } | null> } | null };


export const GetStationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"station"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"streamUrl"}},{"kind":"Field","name":{"kind":"Name","value":"currentSong"}},{"kind":"Field","name":{"kind":"Name","value":"playlist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"album"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetStationQuery, GetStationQueryVariables>;
export const GetStationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetStationsQuery, GetStationsQueryVariables>;