import { IBranchList } from "@/models/branch"

export const getKeysandValues = (list: IBranchList[], obj: any) => {

    return list.map((obj) => ({ obj }))

}
