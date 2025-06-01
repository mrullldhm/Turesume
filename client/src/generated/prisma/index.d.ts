
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model WorkExperience
 * 
 */
export type WorkExperience = $Result.DefaultSelection<Prisma.$WorkExperiencePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Award
 * 
 */
export type Award = $Result.DefaultSelection<Prisma.$AwardPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Resumes
 * const resumes = await prisma.resume.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Resumes
   * const resumes = await prisma.resume.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workExperience`: Exposes CRUD operations for the **WorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkExperiences
    * const workExperiences = await prisma.workExperience.findMany()
    * ```
    */
  get workExperience(): Prisma.WorkExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award`: Exposes CRUD operations for the **Award** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Awards
    * const awards = await prisma.award.findMany()
    * ```
    */
  get award(): Prisma.AwardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Resume: 'Resume',
    WorkExperience: 'WorkExperience',
    Education: 'Education',
    Award: 'Award',
    Certificate: 'Certificate',
    Project: 'Project'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "resume" | "workExperience" | "education" | "award" | "certificate" | "project"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      WorkExperience: {
        payload: Prisma.$WorkExperiencePayload<ExtArgs>
        fields: Prisma.WorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.WorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findMany: {
            args: Prisma.WorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          create: {
            args: Prisma.WorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          createMany: {
            args: Prisma.WorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          delete: {
            args: Prisma.WorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          update: {
            args: Prisma.WorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.WorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          upsert: {
            args: Prisma.WorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.WorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkExperience>
          }
          groupBy: {
            args: Prisma.WorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Award: {
        payload: Prisma.$AwardPayload<ExtArgs>
        fields: Prisma.AwardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AwardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AwardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findFirst: {
            args: Prisma.AwardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AwardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findMany: {
            args: Prisma.AwardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          create: {
            args: Prisma.AwardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          createMany: {
            args: Prisma.AwardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AwardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          delete: {
            args: Prisma.AwardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          update: {
            args: Prisma.AwardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          deleteMany: {
            args: Prisma.AwardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AwardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AwardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          upsert: {
            args: Prisma.AwardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          aggregate: {
            args: Prisma.AwardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward>
          }
          groupBy: {
            args: Prisma.AwardGroupByArgs<ExtArgs>
            result: $Utils.Optional<AwardGroupByOutputType>[]
          }
          count: {
            args: Prisma.AwardCountArgs<ExtArgs>
            result: $Utils.Optional<AwardCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    resume?: ResumeOmit
    workExperience?: WorkExperienceOmit
    education?: EducationOmit
    award?: AwardOmit
    certificate?: CertificateOmit
    project?: ProjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    workExperiences: number
    educations: number
    awards: number
    certificates: number
    projects: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workExperiences?: boolean | ResumeCountOutputTypeCountWorkExperiencesArgs
    educations?: boolean | ResumeCountOutputTypeCountEducationsArgs
    awards?: boolean | ResumeCountOutputTypeCountAwardsArgs
    certificates?: boolean | ResumeCountOutputTypeCountCertificatesArgs
    projects?: boolean | ResumeCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountWorkExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountEducationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountAwardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    photoUrl: string | null
    colorHex: string | null
    borderStyle: string | null
    firstName: string | null
    lastName: string | null
    jobTittle: string | null
    city: string | null
    country: string | null
    phone: string | null
    email: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    photoUrl: string | null
    colorHex: string | null
    borderStyle: string | null
    firstName: string | null
    lastName: string | null
    jobTittle: string | null
    city: string | null
    country: string | null
    phone: string | null
    email: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    photoUrl: number
    colorHex: number
    borderStyle: number
    firstName: number
    lastName: number
    jobTittle: number
    city: number
    country: number
    phone: number
    email: number
    skill: number
    summary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    photoUrl?: true
    colorHex?: true
    borderStyle?: true
    firstName?: true
    lastName?: true
    jobTittle?: true
    city?: true
    country?: true
    phone?: true
    email?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    photoUrl?: true
    colorHex?: true
    borderStyle?: true
    firstName?: true
    lastName?: true
    jobTittle?: true
    city?: true
    country?: true
    phone?: true
    email?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    photoUrl?: true
    colorHex?: true
    borderStyle?: true
    firstName?: true
    lastName?: true
    jobTittle?: true
    city?: true
    country?: true
    phone?: true
    email?: true
    skill?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    description: string | null
    photoUrl: string | null
    colorHex: string
    borderStyle: string
    firstName: string | null
    lastName: string | null
    jobTittle: string | null
    city: string | null
    country: string | null
    phone: string | null
    email: string | null
    skill: string[]
    summary: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    photoUrl?: boolean
    colorHex?: boolean
    borderStyle?: boolean
    firstName?: boolean
    lastName?: boolean
    jobTittle?: boolean
    city?: boolean
    country?: boolean
    phone?: boolean
    email?: boolean
    skill?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workExperiences?: boolean | Resume$workExperiencesArgs<ExtArgs>
    educations?: boolean | Resume$educationsArgs<ExtArgs>
    awards?: boolean | Resume$awardsArgs<ExtArgs>
    certificates?: boolean | Resume$certificatesArgs<ExtArgs>
    projects?: boolean | Resume$projectsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    photoUrl?: boolean
    colorHex?: boolean
    borderStyle?: boolean
    firstName?: boolean
    lastName?: boolean
    jobTittle?: boolean
    city?: boolean
    country?: boolean
    phone?: boolean
    email?: boolean
    skill?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    photoUrl?: boolean
    colorHex?: boolean
    borderStyle?: boolean
    firstName?: boolean
    lastName?: boolean
    jobTittle?: boolean
    city?: boolean
    country?: boolean
    phone?: boolean
    email?: boolean
    skill?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    photoUrl?: boolean
    colorHex?: boolean
    borderStyle?: boolean
    firstName?: boolean
    lastName?: boolean
    jobTittle?: boolean
    city?: boolean
    country?: boolean
    phone?: boolean
    email?: boolean
    skill?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "photoUrl" | "colorHex" | "borderStyle" | "firstName" | "lastName" | "jobTittle" | "city" | "country" | "phone" | "email" | "skill" | "summary" | "createdAt" | "updatedAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workExperiences?: boolean | Resume$workExperiencesArgs<ExtArgs>
    educations?: boolean | Resume$educationsArgs<ExtArgs>
    awards?: boolean | Resume$awardsArgs<ExtArgs>
    certificates?: boolean | Resume$certificatesArgs<ExtArgs>
    projects?: boolean | Resume$projectsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      workExperiences: Prisma.$WorkExperiencePayload<ExtArgs>[]
      educations: Prisma.$EducationPayload<ExtArgs>[]
      awards: Prisma.$AwardPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      description: string | null
      photoUrl: string | null
      colorHex: string
      borderStyle: string
      firstName: string | null
      lastName: string | null
      jobTittle: string | null
      city: string | null
      country: string | null
      phone: string | null
      email: string | null
      skill: string[]
      summary: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workExperiences<T extends Resume$workExperiencesArgs<ExtArgs> = {}>(args?: Subset<T, Resume$workExperiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    educations<T extends Resume$educationsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$educationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awards<T extends Resume$awardsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$awardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends Resume$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Resume$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Resume$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly userId: FieldRef<"Resume", 'String'>
    readonly title: FieldRef<"Resume", 'String'>
    readonly description: FieldRef<"Resume", 'String'>
    readonly photoUrl: FieldRef<"Resume", 'String'>
    readonly colorHex: FieldRef<"Resume", 'String'>
    readonly borderStyle: FieldRef<"Resume", 'String'>
    readonly firstName: FieldRef<"Resume", 'String'>
    readonly lastName: FieldRef<"Resume", 'String'>
    readonly jobTittle: FieldRef<"Resume", 'String'>
    readonly city: FieldRef<"Resume", 'String'>
    readonly country: FieldRef<"Resume", 'String'>
    readonly phone: FieldRef<"Resume", 'String'>
    readonly email: FieldRef<"Resume", 'String'>
    readonly skill: FieldRef<"Resume", 'String[]'>
    readonly summary: FieldRef<"Resume", 'String'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
    readonly updatedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume.workExperiences
   */
  export type Resume$workExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    cursor?: WorkExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * Resume.educations
   */
  export type Resume$educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Resume.awards
   */
  export type Resume$awardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    where?: AwardWhereInput
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    cursor?: AwardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Resume.certificates
   */
  export type Resume$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Resume.projects
   */
  export type Resume$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model WorkExperience
   */

  export type AggregateWorkExperience = {
    _count: WorkExperienceCountAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  export type WorkExperienceMinAggregateOutputType = {
    id: string | null
    position: string | null
    company: string | null
    startDate: string | null
    endDate: string | null
    description: string | null
    resumeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkExperienceMaxAggregateOutputType = {
    id: string | null
    position: string | null
    company: string | null
    startDate: string | null
    endDate: string | null
    description: string | null
    resumeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkExperienceCountAggregateOutputType = {
    id: number
    position: number
    company: number
    startDate: number
    endDate: number
    description: number
    resumeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkExperienceMinAggregateInputType = {
    id?: true
    position?: true
    company?: true
    startDate?: true
    endDate?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkExperienceMaxAggregateInputType = {
    id?: true
    position?: true
    company?: true
    startDate?: true
    endDate?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkExperienceCountAggregateInputType = {
    id?: true
    position?: true
    company?: true
    startDate?: true
    endDate?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperience to aggregate.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkExperiences
    **/
    _count?: true | WorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type GetWorkExperienceAggregateType<T extends WorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkExperience[P]>
      : GetScalarType<T[P], AggregateWorkExperience[P]>
  }




  export type WorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithAggregationInput | WorkExperienceOrderByWithAggregationInput[]
    by: WorkExperienceScalarFieldEnum[] | WorkExperienceScalarFieldEnum
    having?: WorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkExperienceCountAggregateInputType | true
    _min?: WorkExperienceMinAggregateInputType
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type WorkExperienceGroupByOutputType = {
    id: string
    position: string | null
    company: string | null
    startDate: string | null
    endDate: string | null
    description: string | null
    resumeId: string
    createdAt: Date
    updatedAt: Date
    _count: WorkExperienceCountAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  type GetWorkExperienceGroupByPayload<T extends WorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type WorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>

  export type WorkExperienceSelectScalar = {
    id?: boolean
    position?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "company" | "startDate" | "endDate" | "description" | "resumeId" | "createdAt" | "updatedAt", ExtArgs["result"]["workExperience"]>
  export type WorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type WorkExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type WorkExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $WorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkExperience"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      position: string | null
      company: string | null
      startDate: string | null
      endDate: string | null
      description: string | null
      resumeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workExperience"]>
    composites: {}
  }

  type WorkExperienceGetPayload<S extends boolean | null | undefined | WorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$WorkExperiencePayload, S>

  type WorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkExperienceCountAggregateInputType | true
    }

  export interface WorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkExperience'], meta: { name: 'WorkExperience' } }
    /**
     * Find zero or one WorkExperience that matches the filter.
     * @param {WorkExperienceFindUniqueArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkExperienceFindUniqueArgs>(args: SelectSubset<T, WorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkExperienceFindFirstArgs>(args?: SelectSubset<T, WorkExperienceFindFirstArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany()
     * 
     * // Get first 10 WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkExperienceFindManyArgs>(args?: SelectSubset<T, WorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkExperience.
     * @param {WorkExperienceCreateArgs} args - Arguments to create a WorkExperience.
     * @example
     * // Create one WorkExperience
     * const WorkExperience = await prisma.workExperience.create({
     *   data: {
     *     // ... data to create a WorkExperience
     *   }
     * })
     * 
     */
    create<T extends WorkExperienceCreateArgs>(args: SelectSubset<T, WorkExperienceCreateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkExperiences.
     * @param {WorkExperienceCreateManyArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkExperienceCreateManyArgs>(args?: SelectSubset<T, WorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkExperiences and returns the data saved in the database.
     * @param {WorkExperienceCreateManyAndReturnArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkExperiences and only return the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkExperience.
     * @param {WorkExperienceDeleteArgs} args - Arguments to delete one WorkExperience.
     * @example
     * // Delete one WorkExperience
     * const WorkExperience = await prisma.workExperience.delete({
     *   where: {
     *     // ... filter to delete one WorkExperience
     *   }
     * })
     * 
     */
    delete<T extends WorkExperienceDeleteArgs>(args: SelectSubset<T, WorkExperienceDeleteArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkExperience.
     * @param {WorkExperienceUpdateArgs} args - Arguments to update one WorkExperience.
     * @example
     * // Update one WorkExperience
     * const workExperience = await prisma.workExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkExperienceUpdateArgs>(args: SelectSubset<T, WorkExperienceUpdateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkExperiences.
     * @param {WorkExperienceDeleteManyArgs} args - Arguments to filter WorkExperiences to delete.
     * @example
     * // Delete a few WorkExperiences
     * const { count } = await prisma.workExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkExperienceDeleteManyArgs>(args?: SelectSubset<T, WorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkExperienceUpdateManyArgs>(args: SelectSubset<T, WorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences and returns the data updated in the database.
     * @param {WorkExperienceUpdateManyAndReturnArgs} args - Arguments to update many WorkExperiences.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkExperiences and only return the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkExperience.
     * @param {WorkExperienceUpsertArgs} args - Arguments to update or create a WorkExperience.
     * @example
     * // Update or create a WorkExperience
     * const workExperience = await prisma.workExperience.upsert({
     *   create: {
     *     // ... data to create a WorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends WorkExperienceUpsertArgs>(args: SelectSubset<T, WorkExperienceUpsertArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceCountArgs} args - Arguments to filter WorkExperiences to count.
     * @example
     * // Count the number of WorkExperiences
     * const count = await prisma.workExperience.count({
     *   where: {
     *     // ... the filter for the WorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends WorkExperienceCountArgs>(
      args?: Subset<T, WorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkExperienceAggregateArgs>(args: Subset<T, WorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetWorkExperienceAggregateType<T>>

    /**
     * Group by WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: WorkExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkExperience model
   */
  readonly fields: WorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkExperience model
   */
  interface WorkExperienceFieldRefs {
    readonly id: FieldRef<"WorkExperience", 'String'>
    readonly position: FieldRef<"WorkExperience", 'String'>
    readonly company: FieldRef<"WorkExperience", 'String'>
    readonly startDate: FieldRef<"WorkExperience", 'String'>
    readonly endDate: FieldRef<"WorkExperience", 'String'>
    readonly description: FieldRef<"WorkExperience", 'String'>
    readonly resumeId: FieldRef<"WorkExperience", 'String'>
    readonly createdAt: FieldRef<"WorkExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkExperience findUnique
   */
  export type WorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findUniqueOrThrow
   */
  export type WorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findFirst
   */
  export type WorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findFirstOrThrow
   */
  export type WorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findMany
   */
  export type WorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperiences to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience create
   */
  export type WorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkExperience.
     */
    data: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
  }

  /**
   * WorkExperience createMany
   */
  export type WorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkExperience createManyAndReturn
   */
  export type WorkExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperience update
   */
  export type WorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkExperience.
     */
    data: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which WorkExperience to update.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience updateMany
   */
  export type WorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to update.
     */
    limit?: number
  }

  /**
   * WorkExperience updateManyAndReturn
   */
  export type WorkExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperience upsert
   */
  export type WorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkExperience to update in case it exists.
     */
    where: WorkExperienceWhereUniqueInput
    /**
     * In case the WorkExperience found by the `where` argument doesn't exist, create a new WorkExperience with this data.
     */
    create: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
    /**
     * In case the WorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
  }

  /**
   * WorkExperience delete
   */
  export type WorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which WorkExperience to delete.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience deleteMany
   */
  export type WorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperiences to delete
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to delete.
     */
    limit?: number
  }

  /**
   * WorkExperience without action
   */
  export type WorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    institution: string | null
    fieldOfStudy: string | null
    startDate: string | null
    endDate: string | null
    description: string | null
    resumeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    institution: string | null
    fieldOfStudy: string | null
    startDate: string | null
    endDate: string | null
    description: string | null
    resumeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    institution: number
    fieldOfStudy: number
    startDate: number
    endDate: number
    description: number
    resumeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    institution?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    institution?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    institution?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    institution: string | null
    fieldOfStudy: string | null
    startDate: string | null
    endDate: string | null
    description: string
    resumeId: string
    createdAt: Date
    updatedAt: Date
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    institution?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institution" | "fieldOfStudy" | "startDate" | "endDate" | "description" | "resumeId" | "createdAt" | "updatedAt", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institution: string | null
      fieldOfStudy: string | null
      startDate: string | null
      endDate: string | null
      description: string
      resumeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly institution: FieldRef<"Education", 'String'>
    readonly fieldOfStudy: FieldRef<"Education", 'String'>
    readonly startDate: FieldRef<"Education", 'String'>
    readonly endDate: FieldRef<"Education", 'String'>
    readonly description: FieldRef<"Education", 'String'>
    readonly resumeId: FieldRef<"Education", 'String'>
    readonly createdAt: FieldRef<"Education", 'DateTime'>
    readonly updatedAt: FieldRef<"Education", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Award
   */

  export type AggregateAward = {
    _count: AwardCountAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  export type AwardMinAggregateOutputType = {
    id: string | null
    title: string | null
    issuer: string | null
    dateReceived: string | null
    description: string | null
    resumeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AwardMaxAggregateOutputType = {
    id: string | null
    title: string | null
    issuer: string | null
    dateReceived: string | null
    description: string | null
    resumeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AwardCountAggregateOutputType = {
    id: number
    title: number
    issuer: number
    dateReceived: number
    description: number
    resumeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AwardMinAggregateInputType = {
    id?: true
    title?: true
    issuer?: true
    dateReceived?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AwardMaxAggregateInputType = {
    id?: true
    title?: true
    issuer?: true
    dateReceived?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AwardCountAggregateInputType = {
    id?: true
    title?: true
    issuer?: true
    dateReceived?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AwardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Award to aggregate.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Awards
    **/
    _count?: true | AwardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AwardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AwardMaxAggregateInputType
  }

  export type GetAwardAggregateType<T extends AwardAggregateArgs> = {
        [P in keyof T & keyof AggregateAward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward[P]>
      : GetScalarType<T[P], AggregateAward[P]>
  }




  export type AwardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWhereInput
    orderBy?: AwardOrderByWithAggregationInput | AwardOrderByWithAggregationInput[]
    by: AwardScalarFieldEnum[] | AwardScalarFieldEnum
    having?: AwardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AwardCountAggregateInputType | true
    _min?: AwardMinAggregateInputType
    _max?: AwardMaxAggregateInputType
  }

  export type AwardGroupByOutputType = {
    id: string
    title: string
    issuer: string
    dateReceived: string | null
    description: string | null
    resumeId: string
    createdAt: Date
    updatedAt: Date
    _count: AwardCountAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  type GetAwardGroupByPayload<T extends AwardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AwardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AwardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AwardGroupByOutputType[P]>
            : GetScalarType<T[P], AwardGroupByOutputType[P]>
        }
      >
    >


  export type AwardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    issuer?: boolean
    dateReceived?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>

  export type AwardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    issuer?: boolean
    dateReceived?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>

  export type AwardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    issuer?: boolean
    dateReceived?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>

  export type AwardSelectScalar = {
    id?: boolean
    title?: boolean
    issuer?: boolean
    dateReceived?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AwardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "issuer" | "dateReceived" | "description" | "resumeId" | "createdAt" | "updatedAt", ExtArgs["result"]["award"]>
  export type AwardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type AwardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type AwardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $AwardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Award"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      issuer: string
      dateReceived: string | null
      description: string | null
      resumeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["award"]>
    composites: {}
  }

  type AwardGetPayload<S extends boolean | null | undefined | AwardDefaultArgs> = $Result.GetResult<Prisma.$AwardPayload, S>

  type AwardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AwardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AwardCountAggregateInputType | true
    }

  export interface AwardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Award'], meta: { name: 'Award' } }
    /**
     * Find zero or one Award that matches the filter.
     * @param {AwardFindUniqueArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AwardFindUniqueArgs>(args: SelectSubset<T, AwardFindUniqueArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AwardFindUniqueOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AwardFindUniqueOrThrowArgs>(args: SelectSubset<T, AwardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AwardFindFirstArgs>(args?: SelectSubset<T, AwardFindFirstArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AwardFindFirstOrThrowArgs>(args?: SelectSubset<T, AwardFindFirstOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Awards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Awards
     * const awards = await prisma.award.findMany()
     * 
     * // Get first 10 Awards
     * const awards = await prisma.award.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const awardWithIdOnly = await prisma.award.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AwardFindManyArgs>(args?: SelectSubset<T, AwardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award.
     * @param {AwardCreateArgs} args - Arguments to create a Award.
     * @example
     * // Create one Award
     * const Award = await prisma.award.create({
     *   data: {
     *     // ... data to create a Award
     *   }
     * })
     * 
     */
    create<T extends AwardCreateArgs>(args: SelectSubset<T, AwardCreateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Awards.
     * @param {AwardCreateManyArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AwardCreateManyArgs>(args?: SelectSubset<T, AwardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Awards and returns the data saved in the database.
     * @param {AwardCreateManyAndReturnArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Awards and only return the `id`
     * const awardWithIdOnly = await prisma.award.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AwardCreateManyAndReturnArgs>(args?: SelectSubset<T, AwardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award.
     * @param {AwardDeleteArgs} args - Arguments to delete one Award.
     * @example
     * // Delete one Award
     * const Award = await prisma.award.delete({
     *   where: {
     *     // ... filter to delete one Award
     *   }
     * })
     * 
     */
    delete<T extends AwardDeleteArgs>(args: SelectSubset<T, AwardDeleteArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award.
     * @param {AwardUpdateArgs} args - Arguments to update one Award.
     * @example
     * // Update one Award
     * const award = await prisma.award.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AwardUpdateArgs>(args: SelectSubset<T, AwardUpdateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Awards.
     * @param {AwardDeleteManyArgs} args - Arguments to filter Awards to delete.
     * @example
     * // Delete a few Awards
     * const { count } = await prisma.award.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AwardDeleteManyArgs>(args?: SelectSubset<T, AwardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AwardUpdateManyArgs>(args: SelectSubset<T, AwardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards and returns the data updated in the database.
     * @param {AwardUpdateManyAndReturnArgs} args - Arguments to update many Awards.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Awards and only return the `id`
     * const awardWithIdOnly = await prisma.award.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AwardUpdateManyAndReturnArgs>(args: SelectSubset<T, AwardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award.
     * @param {AwardUpsertArgs} args - Arguments to update or create a Award.
     * @example
     * // Update or create a Award
     * const award = await prisma.award.upsert({
     *   create: {
     *     // ... data to create a Award
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award we want to update
     *   }
     * })
     */
    upsert<T extends AwardUpsertArgs>(args: SelectSubset<T, AwardUpsertArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardCountArgs} args - Arguments to filter Awards to count.
     * @example
     * // Count the number of Awards
     * const count = await prisma.award.count({
     *   where: {
     *     // ... the filter for the Awards we want to count
     *   }
     * })
    **/
    count<T extends AwardCountArgs>(
      args?: Subset<T, AwardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AwardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AwardAggregateArgs>(args: Subset<T, AwardAggregateArgs>): Prisma.PrismaPromise<GetAwardAggregateType<T>>

    /**
     * Group by Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AwardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AwardGroupByArgs['orderBy'] }
        : { orderBy?: AwardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AwardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Award model
   */
  readonly fields: AwardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Award.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AwardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Award model
   */
  interface AwardFieldRefs {
    readonly id: FieldRef<"Award", 'String'>
    readonly title: FieldRef<"Award", 'String'>
    readonly issuer: FieldRef<"Award", 'String'>
    readonly dateReceived: FieldRef<"Award", 'String'>
    readonly description: FieldRef<"Award", 'String'>
    readonly resumeId: FieldRef<"Award", 'String'>
    readonly createdAt: FieldRef<"Award", 'DateTime'>
    readonly updatedAt: FieldRef<"Award", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Award findUnique
   */
  export type AwardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findUniqueOrThrow
   */
  export type AwardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findFirst
   */
  export type AwardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findFirstOrThrow
   */
  export type AwardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findMany
   */
  export type AwardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Awards to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award create
   */
  export type AwardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The data needed to create a Award.
     */
    data: XOR<AwardCreateInput, AwardUncheckedCreateInput>
  }

  /**
   * Award createMany
   */
  export type AwardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Award createManyAndReturn
   */
  export type AwardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Award update
   */
  export type AwardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The data needed to update a Award.
     */
    data: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
    /**
     * Choose, which Award to update.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award updateMany
   */
  export type AwardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
  }

  /**
   * Award updateManyAndReturn
   */
  export type AwardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Award upsert
   */
  export type AwardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The filter to search for the Award to update in case it exists.
     */
    where: AwardWhereUniqueInput
    /**
     * In case the Award found by the `where` argument doesn't exist, create a new Award with this data.
     */
    create: XOR<AwardCreateInput, AwardUncheckedCreateInput>
    /**
     * In case the Award was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
  }

  /**
   * Award delete
   */
  export type AwardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter which Award to delete.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award deleteMany
   */
  export type AwardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Awards to delete
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to delete.
     */
    limit?: number
  }

  /**
   * Award without action
   */
  export type AwardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    title: string | null
    issuer: string | null
    issueDate: string | null
    credentialId: string | null
    credentialUrl: string | null
    description: string | null
    resumeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    issuer: string | null
    issueDate: string | null
    credentialId: string | null
    credentialUrl: string | null
    description: string | null
    resumeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    title: number
    issuer: number
    issueDate: number
    credentialId: number
    credentialUrl: number
    description: number
    resumeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CertificateMinAggregateInputType = {
    id?: true
    title?: true
    issuer?: true
    issueDate?: true
    credentialId?: true
    credentialUrl?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    title?: true
    issuer?: true
    issueDate?: true
    credentialId?: true
    credentialUrl?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    title?: true
    issuer?: true
    issueDate?: true
    credentialId?: true
    credentialUrl?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    title: string
    issuer: string
    issueDate: string | null
    credentialId: string | null
    credentialUrl: string | null
    description: string | null
    resumeId: string
    createdAt: Date
    updatedAt: Date
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    issuer?: boolean
    issueDate?: boolean
    credentialId?: boolean
    credentialUrl?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    issuer?: boolean
    issueDate?: boolean
    credentialId?: boolean
    credentialUrl?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    issuer?: boolean
    issueDate?: boolean
    credentialId?: boolean
    credentialUrl?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    title?: boolean
    issuer?: boolean
    issueDate?: boolean
    credentialId?: boolean
    credentialUrl?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "issuer" | "issueDate" | "credentialId" | "credentialUrl" | "description" | "resumeId" | "createdAt" | "updatedAt", ExtArgs["result"]["certificate"]>
  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      issuer: string
      issueDate: string | null
      credentialId: string | null
      credentialUrl: string | null
      description: string | null
      resumeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly title: FieldRef<"Certificate", 'String'>
    readonly issuer: FieldRef<"Certificate", 'String'>
    readonly issueDate: FieldRef<"Certificate", 'String'>
    readonly credentialId: FieldRef<"Certificate", 'String'>
    readonly credentialUrl: FieldRef<"Certificate", 'String'>
    readonly description: FieldRef<"Certificate", 'String'>
    readonly resumeId: FieldRef<"Certificate", 'String'>
    readonly createdAt: FieldRef<"Certificate", 'DateTime'>
    readonly updatedAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    publicationDate: string | null
    publicationUrl: string | null
    description: string | null
    resumeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    publicationDate: string | null
    publicationUrl: string | null
    description: string | null
    resumeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    publicationDate: number
    publicationUrl: number
    description: number
    resumeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    publicationDate?: true
    publicationUrl?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    publicationDate?: true
    publicationUrl?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    publicationDate?: true
    publicationUrl?: true
    description?: true
    resumeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    publicationDate: string | null
    publicationUrl: string | null
    description: string | null
    resumeId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    publicationDate?: boolean
    publicationUrl?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    publicationDate?: boolean
    publicationUrl?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    publicationDate?: boolean
    publicationUrl?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    publicationDate?: boolean
    publicationUrl?: boolean
    description?: boolean
    resumeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "publicationDate" | "publicationUrl" | "description" | "resumeId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      publicationDate: string | null
      publicationUrl: string | null
      description: string | null
      resumeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly publicationDate: FieldRef<"Project", 'String'>
    readonly publicationUrl: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly resumeId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    photoUrl: 'photoUrl',
    colorHex: 'colorHex',
    borderStyle: 'borderStyle',
    firstName: 'firstName',
    lastName: 'lastName',
    jobTittle: 'jobTittle',
    city: 'city',
    country: 'country',
    phone: 'phone',
    email: 'email',
    skill: 'skill',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const WorkExperienceScalarFieldEnum: {
    id: 'id',
    position: 'position',
    company: 'company',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    resumeId: 'resumeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkExperienceScalarFieldEnum = (typeof WorkExperienceScalarFieldEnum)[keyof typeof WorkExperienceScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    institution: 'institution',
    fieldOfStudy: 'fieldOfStudy',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    resumeId: 'resumeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const AwardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    issuer: 'issuer',
    dateReceived: 'dateReceived',
    description: 'description',
    resumeId: 'resumeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AwardScalarFieldEnum = (typeof AwardScalarFieldEnum)[keyof typeof AwardScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    issuer: 'issuer',
    issueDate: 'issueDate',
    credentialId: 'credentialId',
    credentialUrl: 'credentialUrl',
    description: 'description',
    resumeId: 'resumeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    publicationDate: 'publicationDate',
    publicationUrl: 'publicationUrl',
    description: 'description',
    resumeId: 'resumeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    title?: StringNullableFilter<"Resume"> | string | null
    description?: StringNullableFilter<"Resume"> | string | null
    photoUrl?: StringNullableFilter<"Resume"> | string | null
    colorHex?: StringFilter<"Resume"> | string
    borderStyle?: StringFilter<"Resume"> | string
    firstName?: StringNullableFilter<"Resume"> | string | null
    lastName?: StringNullableFilter<"Resume"> | string | null
    jobTittle?: StringNullableFilter<"Resume"> | string | null
    city?: StringNullableFilter<"Resume"> | string | null
    country?: StringNullableFilter<"Resume"> | string | null
    phone?: StringNullableFilter<"Resume"> | string | null
    email?: StringNullableFilter<"Resume"> | string | null
    skill?: StringNullableListFilter<"Resume">
    summary?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    workExperiences?: WorkExperienceListRelationFilter
    educations?: EducationListRelationFilter
    awards?: AwardListRelationFilter
    certificates?: CertificateListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    colorHex?: SortOrder
    borderStyle?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    jobTittle?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    skill?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workExperiences?: WorkExperienceOrderByRelationAggregateInput
    educations?: EducationOrderByRelationAggregateInput
    awards?: AwardOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    userId?: StringFilter<"Resume"> | string
    title?: StringNullableFilter<"Resume"> | string | null
    description?: StringNullableFilter<"Resume"> | string | null
    photoUrl?: StringNullableFilter<"Resume"> | string | null
    colorHex?: StringFilter<"Resume"> | string
    borderStyle?: StringFilter<"Resume"> | string
    firstName?: StringNullableFilter<"Resume"> | string | null
    lastName?: StringNullableFilter<"Resume"> | string | null
    jobTittle?: StringNullableFilter<"Resume"> | string | null
    city?: StringNullableFilter<"Resume"> | string | null
    country?: StringNullableFilter<"Resume"> | string | null
    phone?: StringNullableFilter<"Resume"> | string | null
    email?: StringNullableFilter<"Resume"> | string | null
    skill?: StringNullableListFilter<"Resume">
    summary?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    workExperiences?: WorkExperienceListRelationFilter
    educations?: EducationListRelationFilter
    awards?: AwardListRelationFilter
    certificates?: CertificateListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    colorHex?: SortOrder
    borderStyle?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    jobTittle?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    skill?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    userId?: StringWithAggregatesFilter<"Resume"> | string
    title?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    description?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    colorHex?: StringWithAggregatesFilter<"Resume"> | string
    borderStyle?: StringWithAggregatesFilter<"Resume"> | string
    firstName?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    jobTittle?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    city?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    country?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    email?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    skill?: StringNullableListFilter<"Resume">
    summary?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type WorkExperienceWhereInput = {
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    id?: StringFilter<"WorkExperience"> | string
    position?: StringNullableFilter<"WorkExperience"> | string | null
    company?: StringNullableFilter<"WorkExperience"> | string | null
    startDate?: StringNullableFilter<"WorkExperience"> | string | null
    endDate?: StringNullableFilter<"WorkExperience"> | string | null
    description?: StringNullableFilter<"WorkExperience"> | string | null
    resumeId?: StringFilter<"WorkExperience"> | string
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"WorkExperience"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type WorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type WorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    position?: StringNullableFilter<"WorkExperience"> | string | null
    company?: StringNullableFilter<"WorkExperience"> | string | null
    startDate?: StringNullableFilter<"WorkExperience"> | string | null
    endDate?: StringNullableFilter<"WorkExperience"> | string | null
    description?: StringNullableFilter<"WorkExperience"> | string | null
    resumeId?: StringFilter<"WorkExperience"> | string
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"WorkExperience"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type WorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkExperienceCountOrderByAggregateInput
    _max?: WorkExperienceMaxOrderByAggregateInput
    _min?: WorkExperienceMinOrderByAggregateInput
  }

  export type WorkExperienceScalarWhereWithAggregatesInput = {
    AND?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    OR?: WorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkExperience"> | string
    position?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    company?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    startDate?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    endDate?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    description?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    resumeId?: StringWithAggregatesFilter<"WorkExperience"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    institution?: StringNullableFilter<"Education"> | string | null
    fieldOfStudy?: StringNullableFilter<"Education"> | string | null
    startDate?: StringNullableFilter<"Education"> | string | null
    endDate?: StringNullableFilter<"Education"> | string | null
    description?: StringFilter<"Education"> | string
    resumeId?: StringFilter<"Education"> | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    institution?: SortOrderInput | SortOrder
    fieldOfStudy?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    institution?: StringNullableFilter<"Education"> | string | null
    fieldOfStudy?: StringNullableFilter<"Education"> | string | null
    startDate?: StringNullableFilter<"Education"> | string | null
    endDate?: StringNullableFilter<"Education"> | string | null
    description?: StringFilter<"Education"> | string
    resumeId?: StringFilter<"Education"> | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    institution?: SortOrderInput | SortOrder
    fieldOfStudy?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    institution?: StringNullableWithAggregatesFilter<"Education"> | string | null
    fieldOfStudy?: StringNullableWithAggregatesFilter<"Education"> | string | null
    startDate?: StringNullableWithAggregatesFilter<"Education"> | string | null
    endDate?: StringNullableWithAggregatesFilter<"Education"> | string | null
    description?: StringWithAggregatesFilter<"Education"> | string
    resumeId?: StringWithAggregatesFilter<"Education"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
  }

  export type AwardWhereInput = {
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    id?: StringFilter<"Award"> | string
    title?: StringFilter<"Award"> | string
    issuer?: StringFilter<"Award"> | string
    dateReceived?: StringNullableFilter<"Award"> | string | null
    description?: StringNullableFilter<"Award"> | string | null
    resumeId?: StringFilter<"Award"> | string
    createdAt?: DateTimeFilter<"Award"> | Date | string
    updatedAt?: DateTimeFilter<"Award"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type AwardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    dateReceived?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type AwardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    title?: StringFilter<"Award"> | string
    issuer?: StringFilter<"Award"> | string
    dateReceived?: StringNullableFilter<"Award"> | string | null
    description?: StringNullableFilter<"Award"> | string | null
    resumeId?: StringFilter<"Award"> | string
    createdAt?: DateTimeFilter<"Award"> | Date | string
    updatedAt?: DateTimeFilter<"Award"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type AwardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    dateReceived?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AwardCountOrderByAggregateInput
    _max?: AwardMaxOrderByAggregateInput
    _min?: AwardMinOrderByAggregateInput
  }

  export type AwardScalarWhereWithAggregatesInput = {
    AND?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    OR?: AwardScalarWhereWithAggregatesInput[]
    NOT?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Award"> | string
    title?: StringWithAggregatesFilter<"Award"> | string
    issuer?: StringWithAggregatesFilter<"Award"> | string
    dateReceived?: StringNullableWithAggregatesFilter<"Award"> | string | null
    description?: StringNullableWithAggregatesFilter<"Award"> | string | null
    resumeId?: StringWithAggregatesFilter<"Award"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Award"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Award"> | Date | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: StringFilter<"Certificate"> | string
    title?: StringFilter<"Certificate"> | string
    issuer?: StringFilter<"Certificate"> | string
    issueDate?: StringNullableFilter<"Certificate"> | string | null
    credentialId?: StringNullableFilter<"Certificate"> | string | null
    credentialUrl?: StringNullableFilter<"Certificate"> | string | null
    description?: StringNullableFilter<"Certificate"> | string | null
    resumeId?: StringFilter<"Certificate"> | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    credentialId?: SortOrderInput | SortOrder
    credentialUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    title?: StringFilter<"Certificate"> | string
    issuer?: StringFilter<"Certificate"> | string
    issueDate?: StringNullableFilter<"Certificate"> | string | null
    credentialId?: StringNullableFilter<"Certificate"> | string | null
    credentialUrl?: StringNullableFilter<"Certificate"> | string | null
    description?: StringNullableFilter<"Certificate"> | string | null
    resumeId?: StringFilter<"Certificate"> | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    credentialId?: SortOrderInput | SortOrder
    credentialUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificate"> | string
    title?: StringWithAggregatesFilter<"Certificate"> | string
    issuer?: StringWithAggregatesFilter<"Certificate"> | string
    issueDate?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    credentialId?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    credentialUrl?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    description?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    resumeId?: StringWithAggregatesFilter<"Certificate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    publicationDate?: StringNullableFilter<"Project"> | string | null
    publicationUrl?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    resumeId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    publicationDate?: SortOrderInput | SortOrder
    publicationUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    publicationDate?: StringNullableFilter<"Project"> | string | null
    publicationUrl?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    resumeId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    publicationDate?: SortOrderInput | SortOrder
    publicationUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    publicationDate?: StringNullableWithAggregatesFilter<"Project"> | string | null
    publicationUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    resumeId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: WorkExperienceCreateNestedManyWithoutResumeInput
    educations?: EducationCreateNestedManyWithoutResumeInput
    awards?: AwardCreateNestedManyWithoutResumeInput
    certificates?: CertificateCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutResumeInput
    educations?: EducationUncheckedCreateNestedManyWithoutResumeInput
    awards?: AwardUncheckedCreateNestedManyWithoutResumeInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: WorkExperienceUpdateManyWithoutResumeNestedInput
    educations?: EducationUpdateManyWithoutResumeNestedInput
    awards?: AwardUpdateManyWithoutResumeNestedInput
    certificates?: CertificateUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutResumeNestedInput
    educations?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    awards?: AwardUncheckedUpdateManyWithoutResumeNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceCreateInput = {
    id?: string
    position?: string | null
    company?: string | null
    startDate?: string | null
    endDate?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutWorkExperiencesInput
  }

  export type WorkExperienceUncheckedCreateInput = {
    id?: string
    position?: string | null
    company?: string | null
    startDate?: string | null
    endDate?: string | null
    description?: string | null
    resumeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutWorkExperiencesNestedInput
  }

  export type WorkExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceCreateManyInput = {
    id?: string
    position?: string | null
    company?: string | null
    startDate?: string | null
    endDate?: string | null
    description?: string | null
    resumeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateInput = {
    id?: string
    institution?: string | null
    fieldOfStudy?: string | null
    startDate?: string | null
    endDate?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutEducationsInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    institution?: string | null
    fieldOfStudy?: string | null
    startDate?: string | null
    endDate?: string | null
    description: string
    resumeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutEducationsNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateManyInput = {
    id?: string
    institution?: string | null
    fieldOfStudy?: string | null
    startDate?: string | null
    endDate?: string | null
    description: string
    resumeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardCreateInput = {
    id?: string
    title: string
    issuer: string
    dateReceived?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutAwardsInput
  }

  export type AwardUncheckedCreateInput = {
    id?: string
    title: string
    issuer: string
    dateReceived?: string | null
    description?: string | null
    resumeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    dateReceived?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutAwardsNestedInput
  }

  export type AwardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    dateReceived?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardCreateManyInput = {
    id?: string
    title: string
    issuer: string
    dateReceived?: string | null
    description?: string | null
    resumeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    dateReceived?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    dateReceived?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateInput = {
    id?: string
    title: string
    issuer: string
    issueDate?: string | null
    credentialId?: string | null
    credentialUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    title: string
    issuer: string
    issueDate?: string | null
    credentialId?: string | null
    credentialUrl?: string | null
    description?: string | null
    resumeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableStringFieldUpdateOperationsInput | string | null
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableStringFieldUpdateOperationsInput | string | null
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyInput = {
    id?: string
    title: string
    issuer: string
    issueDate?: string | null
    credentialId?: string | null
    credentialUrl?: string | null
    description?: string | null
    resumeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableStringFieldUpdateOperationsInput | string | null
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableStringFieldUpdateOperationsInput | string | null
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    publicationDate?: string | null
    publicationUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    publicationDate?: string | null
    publicationUrl?: string | null
    description?: string | null
    resumeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableStringFieldUpdateOperationsInput | string | null
    publicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableStringFieldUpdateOperationsInput | string | null
    publicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    publicationDate?: string | null
    publicationUrl?: string | null
    description?: string | null
    resumeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableStringFieldUpdateOperationsInput | string | null
    publicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableStringFieldUpdateOperationsInput | string | null
    publicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkExperienceListRelationFilter = {
    every?: WorkExperienceWhereInput
    some?: WorkExperienceWhereInput
    none?: WorkExperienceWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type AwardListRelationFilter = {
    every?: AwardWhereInput
    some?: AwardWhereInput
    none?: AwardWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AwardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
    colorHex?: SortOrder
    borderStyle?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    jobTittle?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    skill?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
    colorHex?: SortOrder
    borderStyle?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    jobTittle?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    photoUrl?: SortOrder
    colorHex?: SortOrder
    borderStyle?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    jobTittle?: SortOrder
    city?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ResumeScalarRelationFilter = {
    is?: ResumeWhereInput
    isNot?: ResumeWhereInput
  }

  export type WorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    dateReceived?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    dateReceived?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    dateReceived?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    issueDate?: SortOrder
    credentialId?: SortOrder
    credentialUrl?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    issueDate?: SortOrder
    credentialId?: SortOrder
    credentialUrl?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    issuer?: SortOrder
    issueDate?: SortOrder
    credentialId?: SortOrder
    credentialUrl?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicationDate?: SortOrder
    publicationUrl?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicationDate?: SortOrder
    publicationUrl?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    publicationDate?: SortOrder
    publicationUrl?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeCreateskillInput = {
    set: string[]
  }

  export type WorkExperienceCreateNestedManyWithoutResumeInput = {
    create?: XOR<WorkExperienceCreateWithoutResumeInput, WorkExperienceUncheckedCreateWithoutResumeInput> | WorkExperienceCreateWithoutResumeInput[] | WorkExperienceUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutResumeInput | WorkExperienceCreateOrConnectWithoutResumeInput[]
    createMany?: WorkExperienceCreateManyResumeInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutResumeInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type AwardCreateNestedManyWithoutResumeInput = {
    create?: XOR<AwardCreateWithoutResumeInput, AwardUncheckedCreateWithoutResumeInput> | AwardCreateWithoutResumeInput[] | AwardUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutResumeInput | AwardCreateOrConnectWithoutResumeInput[]
    createMany?: AwardCreateManyResumeInputEnvelope
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutResumeInput = {
    create?: XOR<CertificateCreateWithoutResumeInput, CertificateUncheckedCreateWithoutResumeInput> | CertificateCreateWithoutResumeInput[] | CertificateUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutResumeInput | CertificateCreateOrConnectWithoutResumeInput[]
    createMany?: CertificateCreateManyResumeInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutResumeInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type WorkExperienceUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<WorkExperienceCreateWithoutResumeInput, WorkExperienceUncheckedCreateWithoutResumeInput> | WorkExperienceCreateWithoutResumeInput[] | WorkExperienceUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutResumeInput | WorkExperienceCreateOrConnectWithoutResumeInput[]
    createMany?: WorkExperienceCreateManyResumeInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type AwardUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<AwardCreateWithoutResumeInput, AwardUncheckedCreateWithoutResumeInput> | AwardCreateWithoutResumeInput[] | AwardUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutResumeInput | AwardCreateOrConnectWithoutResumeInput[]
    createMany?: AwardCreateManyResumeInputEnvelope
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<CertificateCreateWithoutResumeInput, CertificateUncheckedCreateWithoutResumeInput> | CertificateCreateWithoutResumeInput[] | CertificateUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutResumeInput | CertificateCreateOrConnectWithoutResumeInput[]
    createMany?: CertificateCreateManyResumeInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ResumeUpdateskillInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkExperienceUpdateManyWithoutResumeNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutResumeInput, WorkExperienceUncheckedCreateWithoutResumeInput> | WorkExperienceCreateWithoutResumeInput[] | WorkExperienceUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutResumeInput | WorkExperienceCreateOrConnectWithoutResumeInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutResumeInput | WorkExperienceUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: WorkExperienceCreateManyResumeInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutResumeInput | WorkExperienceUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutResumeInput | WorkExperienceUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutResumeNestedInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutResumeInput | EducationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutResumeInput | EducationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutResumeInput | EducationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type AwardUpdateManyWithoutResumeNestedInput = {
    create?: XOR<AwardCreateWithoutResumeInput, AwardUncheckedCreateWithoutResumeInput> | AwardCreateWithoutResumeInput[] | AwardUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutResumeInput | AwardCreateOrConnectWithoutResumeInput[]
    upsert?: AwardUpsertWithWhereUniqueWithoutResumeInput | AwardUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: AwardCreateManyResumeInputEnvelope
    set?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    disconnect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    delete?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    update?: AwardUpdateWithWhereUniqueWithoutResumeInput | AwardUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: AwardUpdateManyWithWhereWithoutResumeInput | AwardUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: AwardScalarWhereInput | AwardScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutResumeNestedInput = {
    create?: XOR<CertificateCreateWithoutResumeInput, CertificateUncheckedCreateWithoutResumeInput> | CertificateCreateWithoutResumeInput[] | CertificateUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutResumeInput | CertificateCreateOrConnectWithoutResumeInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutResumeInput | CertificateUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: CertificateCreateManyResumeInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutResumeInput | CertificateUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutResumeInput | CertificateUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutResumeInput | ProjectUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutResumeInput | ProjectUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutResumeInput | ProjectUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type WorkExperienceUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutResumeInput, WorkExperienceUncheckedCreateWithoutResumeInput> | WorkExperienceCreateWithoutResumeInput[] | WorkExperienceUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutResumeInput | WorkExperienceCreateOrConnectWithoutResumeInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutResumeInput | WorkExperienceUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: WorkExperienceCreateManyResumeInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutResumeInput | WorkExperienceUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutResumeInput | WorkExperienceUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutResumeInput | EducationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutResumeInput | EducationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutResumeInput | EducationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type AwardUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<AwardCreateWithoutResumeInput, AwardUncheckedCreateWithoutResumeInput> | AwardCreateWithoutResumeInput[] | AwardUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutResumeInput | AwardCreateOrConnectWithoutResumeInput[]
    upsert?: AwardUpsertWithWhereUniqueWithoutResumeInput | AwardUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: AwardCreateManyResumeInputEnvelope
    set?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    disconnect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    delete?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    update?: AwardUpdateWithWhereUniqueWithoutResumeInput | AwardUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: AwardUpdateManyWithWhereWithoutResumeInput | AwardUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: AwardScalarWhereInput | AwardScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<CertificateCreateWithoutResumeInput, CertificateUncheckedCreateWithoutResumeInput> | CertificateCreateWithoutResumeInput[] | CertificateUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutResumeInput | CertificateCreateOrConnectWithoutResumeInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutResumeInput | CertificateUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: CertificateCreateManyResumeInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutResumeInput | CertificateUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutResumeInput | CertificateUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutResumeInput | ProjectUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutResumeInput | ProjectUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutResumeInput | ProjectUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ResumeCreateNestedOneWithoutWorkExperiencesInput = {
    create?: XOR<ResumeCreateWithoutWorkExperiencesInput, ResumeUncheckedCreateWithoutWorkExperiencesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutWorkExperiencesInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutWorkExperiencesNestedInput = {
    create?: XOR<ResumeCreateWithoutWorkExperiencesInput, ResumeUncheckedCreateWithoutWorkExperiencesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutWorkExperiencesInput
    upsert?: ResumeUpsertWithoutWorkExperiencesInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutWorkExperiencesInput, ResumeUpdateWithoutWorkExperiencesInput>, ResumeUncheckedUpdateWithoutWorkExperiencesInput>
  }

  export type ResumeCreateNestedOneWithoutEducationsInput = {
    create?: XOR<ResumeCreateWithoutEducationsInput, ResumeUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutEducationsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutEducationsNestedInput = {
    create?: XOR<ResumeCreateWithoutEducationsInput, ResumeUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutEducationsInput
    upsert?: ResumeUpsertWithoutEducationsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutEducationsInput, ResumeUpdateWithoutEducationsInput>, ResumeUncheckedUpdateWithoutEducationsInput>
  }

  export type ResumeCreateNestedOneWithoutAwardsInput = {
    create?: XOR<ResumeCreateWithoutAwardsInput, ResumeUncheckedCreateWithoutAwardsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutAwardsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutAwardsNestedInput = {
    create?: XOR<ResumeCreateWithoutAwardsInput, ResumeUncheckedCreateWithoutAwardsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutAwardsInput
    upsert?: ResumeUpsertWithoutAwardsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutAwardsInput, ResumeUpdateWithoutAwardsInput>, ResumeUncheckedUpdateWithoutAwardsInput>
  }

  export type ResumeCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<ResumeCreateWithoutCertificatesInput, ResumeUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutCertificatesInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<ResumeCreateWithoutCertificatesInput, ResumeUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutCertificatesInput
    upsert?: ResumeUpsertWithoutCertificatesInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutCertificatesInput, ResumeUpdateWithoutCertificatesInput>, ResumeUncheckedUpdateWithoutCertificatesInput>
  }

  export type ResumeCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutProjectsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutProjectsInput
    upsert?: ResumeUpsertWithoutProjectsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutProjectsInput, ResumeUpdateWithoutProjectsInput>, ResumeUncheckedUpdateWithoutProjectsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WorkExperienceCreateWithoutResumeInput = {
    id?: string
    position?: string | null
    company?: string | null
    startDate?: string | null
    endDate?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkExperienceUncheckedCreateWithoutResumeInput = {
    id?: string
    position?: string | null
    company?: string | null
    startDate?: string | null
    endDate?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkExperienceCreateOrConnectWithoutResumeInput = {
    where: WorkExperienceWhereUniqueInput
    create: XOR<WorkExperienceCreateWithoutResumeInput, WorkExperienceUncheckedCreateWithoutResumeInput>
  }

  export type WorkExperienceCreateManyResumeInputEnvelope = {
    data: WorkExperienceCreateManyResumeInput | WorkExperienceCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type EducationCreateWithoutResumeInput = {
    id?: string
    institution?: string | null
    fieldOfStudy?: string | null
    startDate?: string | null
    endDate?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUncheckedCreateWithoutResumeInput = {
    id?: string
    institution?: string | null
    fieldOfStudy?: string | null
    startDate?: string | null
    endDate?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateOrConnectWithoutResumeInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput>
  }

  export type EducationCreateManyResumeInputEnvelope = {
    data: EducationCreateManyResumeInput | EducationCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type AwardCreateWithoutResumeInput = {
    id?: string
    title: string
    issuer: string
    dateReceived?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardUncheckedCreateWithoutResumeInput = {
    id?: string
    title: string
    issuer: string
    dateReceived?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardCreateOrConnectWithoutResumeInput = {
    where: AwardWhereUniqueInput
    create: XOR<AwardCreateWithoutResumeInput, AwardUncheckedCreateWithoutResumeInput>
  }

  export type AwardCreateManyResumeInputEnvelope = {
    data: AwardCreateManyResumeInput | AwardCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutResumeInput = {
    id?: string
    title: string
    issuer: string
    issueDate?: string | null
    credentialId?: string | null
    credentialUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUncheckedCreateWithoutResumeInput = {
    id?: string
    title: string
    issuer: string
    issueDate?: string | null
    credentialId?: string | null
    credentialUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutResumeInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutResumeInput, CertificateUncheckedCreateWithoutResumeInput>
  }

  export type CertificateCreateManyResumeInputEnvelope = {
    data: CertificateCreateManyResumeInput | CertificateCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutResumeInput = {
    id?: string
    title: string
    publicationDate?: string | null
    publicationUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutResumeInput = {
    id?: string
    title: string
    publicationDate?: string | null
    publicationUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutResumeInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput>
  }

  export type ProjectCreateManyResumeInputEnvelope = {
    data: ProjectCreateManyResumeInput | ProjectCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type WorkExperienceUpsertWithWhereUniqueWithoutResumeInput = {
    where: WorkExperienceWhereUniqueInput
    update: XOR<WorkExperienceUpdateWithoutResumeInput, WorkExperienceUncheckedUpdateWithoutResumeInput>
    create: XOR<WorkExperienceCreateWithoutResumeInput, WorkExperienceUncheckedCreateWithoutResumeInput>
  }

  export type WorkExperienceUpdateWithWhereUniqueWithoutResumeInput = {
    where: WorkExperienceWhereUniqueInput
    data: XOR<WorkExperienceUpdateWithoutResumeInput, WorkExperienceUncheckedUpdateWithoutResumeInput>
  }

  export type WorkExperienceUpdateManyWithWhereWithoutResumeInput = {
    where: WorkExperienceScalarWhereInput
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyWithoutResumeInput>
  }

  export type WorkExperienceScalarWhereInput = {
    AND?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    OR?: WorkExperienceScalarWhereInput[]
    NOT?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    id?: StringFilter<"WorkExperience"> | string
    position?: StringNullableFilter<"WorkExperience"> | string | null
    company?: StringNullableFilter<"WorkExperience"> | string | null
    startDate?: StringNullableFilter<"WorkExperience"> | string | null
    endDate?: StringNullableFilter<"WorkExperience"> | string | null
    description?: StringNullableFilter<"WorkExperience"> | string | null
    resumeId?: StringFilter<"WorkExperience"> | string
    createdAt?: DateTimeFilter<"WorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"WorkExperience"> | Date | string
  }

  export type EducationUpsertWithWhereUniqueWithoutResumeInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutResumeInput, EducationUncheckedUpdateWithoutResumeInput>
    create: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutResumeInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutResumeInput, EducationUncheckedUpdateWithoutResumeInput>
  }

  export type EducationUpdateManyWithWhereWithoutResumeInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutResumeInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    institution?: StringNullableFilter<"Education"> | string | null
    fieldOfStudy?: StringNullableFilter<"Education"> | string | null
    startDate?: StringNullableFilter<"Education"> | string | null
    endDate?: StringNullableFilter<"Education"> | string | null
    description?: StringFilter<"Education"> | string
    resumeId?: StringFilter<"Education"> | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
  }

  export type AwardUpsertWithWhereUniqueWithoutResumeInput = {
    where: AwardWhereUniqueInput
    update: XOR<AwardUpdateWithoutResumeInput, AwardUncheckedUpdateWithoutResumeInput>
    create: XOR<AwardCreateWithoutResumeInput, AwardUncheckedCreateWithoutResumeInput>
  }

  export type AwardUpdateWithWhereUniqueWithoutResumeInput = {
    where: AwardWhereUniqueInput
    data: XOR<AwardUpdateWithoutResumeInput, AwardUncheckedUpdateWithoutResumeInput>
  }

  export type AwardUpdateManyWithWhereWithoutResumeInput = {
    where: AwardScalarWhereInput
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyWithoutResumeInput>
  }

  export type AwardScalarWhereInput = {
    AND?: AwardScalarWhereInput | AwardScalarWhereInput[]
    OR?: AwardScalarWhereInput[]
    NOT?: AwardScalarWhereInput | AwardScalarWhereInput[]
    id?: StringFilter<"Award"> | string
    title?: StringFilter<"Award"> | string
    issuer?: StringFilter<"Award"> | string
    dateReceived?: StringNullableFilter<"Award"> | string | null
    description?: StringNullableFilter<"Award"> | string | null
    resumeId?: StringFilter<"Award"> | string
    createdAt?: DateTimeFilter<"Award"> | Date | string
    updatedAt?: DateTimeFilter<"Award"> | Date | string
  }

  export type CertificateUpsertWithWhereUniqueWithoutResumeInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutResumeInput, CertificateUncheckedUpdateWithoutResumeInput>
    create: XOR<CertificateCreateWithoutResumeInput, CertificateUncheckedCreateWithoutResumeInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutResumeInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutResumeInput, CertificateUncheckedUpdateWithoutResumeInput>
  }

  export type CertificateUpdateManyWithWhereWithoutResumeInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutResumeInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: StringFilter<"Certificate"> | string
    title?: StringFilter<"Certificate"> | string
    issuer?: StringFilter<"Certificate"> | string
    issueDate?: StringNullableFilter<"Certificate"> | string | null
    credentialId?: StringNullableFilter<"Certificate"> | string | null
    credentialUrl?: StringNullableFilter<"Certificate"> | string | null
    description?: StringNullableFilter<"Certificate"> | string | null
    resumeId?: StringFilter<"Certificate"> | string
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutResumeInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutResumeInput, ProjectUncheckedUpdateWithoutResumeInput>
    create: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutResumeInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutResumeInput, ProjectUncheckedUpdateWithoutResumeInput>
  }

  export type ProjectUpdateManyWithWhereWithoutResumeInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutResumeInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    publicationDate?: StringNullableFilter<"Project"> | string | null
    publicationUrl?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    resumeId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ResumeCreateWithoutWorkExperiencesInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    educations?: EducationCreateNestedManyWithoutResumeInput
    awards?: AwardCreateNestedManyWithoutResumeInput
    certificates?: CertificateCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutWorkExperiencesInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    educations?: EducationUncheckedCreateNestedManyWithoutResumeInput
    awards?: AwardUncheckedCreateNestedManyWithoutResumeInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutWorkExperiencesInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutWorkExperiencesInput, ResumeUncheckedCreateWithoutWorkExperiencesInput>
  }

  export type ResumeUpsertWithoutWorkExperiencesInput = {
    update: XOR<ResumeUpdateWithoutWorkExperiencesInput, ResumeUncheckedUpdateWithoutWorkExperiencesInput>
    create: XOR<ResumeCreateWithoutWorkExperiencesInput, ResumeUncheckedCreateWithoutWorkExperiencesInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutWorkExperiencesInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutWorkExperiencesInput, ResumeUncheckedUpdateWithoutWorkExperiencesInput>
  }

  export type ResumeUpdateWithoutWorkExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educations?: EducationUpdateManyWithoutResumeNestedInput
    awards?: AwardUpdateManyWithoutResumeNestedInput
    certificates?: CertificateUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutWorkExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educations?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    awards?: AwardUncheckedUpdateManyWithoutResumeNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutEducationsInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: WorkExperienceCreateNestedManyWithoutResumeInput
    awards?: AwardCreateNestedManyWithoutResumeInput
    certificates?: CertificateCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutEducationsInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutResumeInput
    awards?: AwardUncheckedCreateNestedManyWithoutResumeInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutEducationsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutEducationsInput, ResumeUncheckedCreateWithoutEducationsInput>
  }

  export type ResumeUpsertWithoutEducationsInput = {
    update: XOR<ResumeUpdateWithoutEducationsInput, ResumeUncheckedUpdateWithoutEducationsInput>
    create: XOR<ResumeCreateWithoutEducationsInput, ResumeUncheckedCreateWithoutEducationsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutEducationsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutEducationsInput, ResumeUncheckedUpdateWithoutEducationsInput>
  }

  export type ResumeUpdateWithoutEducationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: WorkExperienceUpdateManyWithoutResumeNestedInput
    awards?: AwardUpdateManyWithoutResumeNestedInput
    certificates?: CertificateUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutEducationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutResumeNestedInput
    awards?: AwardUncheckedUpdateManyWithoutResumeNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutAwardsInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: WorkExperienceCreateNestedManyWithoutResumeInput
    educations?: EducationCreateNestedManyWithoutResumeInput
    certificates?: CertificateCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutAwardsInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutResumeInput
    educations?: EducationUncheckedCreateNestedManyWithoutResumeInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutAwardsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutAwardsInput, ResumeUncheckedCreateWithoutAwardsInput>
  }

  export type ResumeUpsertWithoutAwardsInput = {
    update: XOR<ResumeUpdateWithoutAwardsInput, ResumeUncheckedUpdateWithoutAwardsInput>
    create: XOR<ResumeCreateWithoutAwardsInput, ResumeUncheckedCreateWithoutAwardsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutAwardsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutAwardsInput, ResumeUncheckedUpdateWithoutAwardsInput>
  }

  export type ResumeUpdateWithoutAwardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: WorkExperienceUpdateManyWithoutResumeNestedInput
    educations?: EducationUpdateManyWithoutResumeNestedInput
    certificates?: CertificateUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutAwardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutResumeNestedInput
    educations?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutCertificatesInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: WorkExperienceCreateNestedManyWithoutResumeInput
    educations?: EducationCreateNestedManyWithoutResumeInput
    awards?: AwardCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutCertificatesInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutResumeInput
    educations?: EducationUncheckedCreateNestedManyWithoutResumeInput
    awards?: AwardUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutCertificatesInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutCertificatesInput, ResumeUncheckedCreateWithoutCertificatesInput>
  }

  export type ResumeUpsertWithoutCertificatesInput = {
    update: XOR<ResumeUpdateWithoutCertificatesInput, ResumeUncheckedUpdateWithoutCertificatesInput>
    create: XOR<ResumeCreateWithoutCertificatesInput, ResumeUncheckedCreateWithoutCertificatesInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutCertificatesInput, ResumeUncheckedUpdateWithoutCertificatesInput>
  }

  export type ResumeUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: WorkExperienceUpdateManyWithoutResumeNestedInput
    educations?: EducationUpdateManyWithoutResumeNestedInput
    awards?: AwardUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutResumeNestedInput
    educations?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    awards?: AwardUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutProjectsInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: WorkExperienceCreateNestedManyWithoutResumeInput
    educations?: EducationCreateNestedManyWithoutResumeInput
    awards?: AwardCreateNestedManyWithoutResumeInput
    certificates?: CertificateCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutProjectsInput = {
    id?: string
    userId: string
    title?: string | null
    description?: string | null
    photoUrl?: string | null
    colorHex?: string
    borderStyle?: string
    firstName?: string | null
    lastName?: string | null
    jobTittle?: string | null
    city?: string | null
    country?: string | null
    phone?: string | null
    email?: string | null
    skill?: ResumeCreateskillInput | string[]
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: WorkExperienceUncheckedCreateNestedManyWithoutResumeInput
    educations?: EducationUncheckedCreateNestedManyWithoutResumeInput
    awards?: AwardUncheckedCreateNestedManyWithoutResumeInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutProjectsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
  }

  export type ResumeUpsertWithoutProjectsInput = {
    update: XOR<ResumeUpdateWithoutProjectsInput, ResumeUncheckedUpdateWithoutProjectsInput>
    create: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutProjectsInput, ResumeUncheckedUpdateWithoutProjectsInput>
  }

  export type ResumeUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: WorkExperienceUpdateManyWithoutResumeNestedInput
    educations?: EducationUpdateManyWithoutResumeNestedInput
    awards?: AwardUpdateManyWithoutResumeNestedInput
    certificates?: CertificateUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    colorHex?: StringFieldUpdateOperationsInput | string
    borderStyle?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTittle?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: ResumeUpdateskillInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: WorkExperienceUncheckedUpdateManyWithoutResumeNestedInput
    educations?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    awards?: AwardUncheckedUpdateManyWithoutResumeNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type WorkExperienceCreateManyResumeInput = {
    id?: string
    position?: string | null
    company?: string | null
    startDate?: string | null
    endDate?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateManyResumeInput = {
    id?: string
    institution?: string | null
    fieldOfStudy?: string | null
    startDate?: string | null
    endDate?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardCreateManyResumeInput = {
    id?: string
    title: string
    issuer: string
    dateReceived?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateCreateManyResumeInput = {
    id?: string
    title: string
    issuer: string
    issueDate?: string | null
    credentialId?: string | null
    credentialUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyResumeInput = {
    id?: string
    title: string
    publicationDate?: string | null
    publicationUrl?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkExperienceUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkExperienceUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    dateReceived?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    dateReceived?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    dateReceived?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableStringFieldUpdateOperationsInput | string | null
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableStringFieldUpdateOperationsInput | string | null
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableStringFieldUpdateOperationsInput | string | null
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableStringFieldUpdateOperationsInput | string | null
    publicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableStringFieldUpdateOperationsInput | string | null
    publicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publicationDate?: NullableStringFieldUpdateOperationsInput | string | null
    publicationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}