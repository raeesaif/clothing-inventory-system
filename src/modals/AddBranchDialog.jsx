import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddBranchDialog({ open, onClose }) {
    return (
        <Dialog open={open} onOpenChange={onClose} >
            <form>
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Add New Branch</DialogTitle>
                        {/* <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription> */}
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="branchName">Branch Name</Label>
                            <Input id="branchName" name="name" placeholder="e.g. Chelsea Store" />
                        </Field>
                        <Field>
                            <Label htmlFor="Location-1">Location</Label>
                            <Input id="Location-1" name="location" placeholder="Full Address" />
                        </Field>
                        <div className="flex justify-between gap-3 items-center" >
                            <Field>
                                <Label htmlFor="manager-1">Manager Name</Label>
                                <Input id="manager-1" name="managerName" placeholder="Manager Name" />
                            </Field>
                            <Field>
                                <Label htmlFor="phone-1">Phone</Label>
                                <Input id="phone-1" name="phone" placeholder="+1 00-000" />
                            </Field>
                        </div>
                        <Field>
                            <Label htmlFor="email-1">Email</Label>
                            <Input id="email-1" name="email" placeholder="branch@gamil.com" />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button onClick={onClose} className="cursor-pointer" type="button" variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button className="text-white cursor-pointer" type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
